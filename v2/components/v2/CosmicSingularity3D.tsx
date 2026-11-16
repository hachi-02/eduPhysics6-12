'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

interface CosmicSingularity3DProps {
  scrollProgressRef?: React.MutableRefObject<number>;
  className?: string;
}

interface CachedPlanetTexture {
  tex: THREE.Texture;
  loaded: boolean;
  callbacks: Array<() => void>;
}

// Persistent texture cache across SPA navigations so returning to `/` avoids re-downloading/decoding 2K textures
const PLANET_TEXTURE_CACHE = new Map<string, CachedPlanetTexture>();

// Seamless 3D value noise & FBM (zero UV seams or polar pinching on Earth/Sun spheres)
const GLSL_NOISE_3D = `
  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);

    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);

    return mix(nxy0, nxy1, f.z);
  }

  float fbm3(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise3D(p);
      p = p * 2.04 + vec3(13.7, -9.2, 5.4);
      a *= 0.5;
    }
    return v;
  }

  // Lightweight 3-octave FBM (~40% faster per call, normalized to match fbm3 range)
  float fbm3Fast(vec3 p) {
    float v = 0.0;
    float a = 0.54;
    for (int i = 0; i < 3; i++) {
      v += a * noise3D(p);
      p = p * 2.04 + vec3(13.7, -9.2, 5.4);
      a *= 0.5;
    }
    return v;
  }

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm2(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 4; i++) {
      v += a * noise2D(p);
      p = rot * p * 2.04 + vec2(17.1, 31.7);
      a *= 0.5;
    }
    return v;
  }
`;

export default function CosmicSingularity3D({
  scrollProgressRef,
  className = '',
}: CosmicSingularity3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const extScrollProgressRef = useRef(scrollProgressRef);

  useEffect(() => {
    extScrollProgressRef.current = scrollProgressRef;
  }, [scrollProgressRef]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 160);

    // Stage 0 Hero (Default): Original framing of Spacetime Gravity Well & Luminous Core
    camera.position.set(0.55, 4.05, 7.6);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setSize(width, height, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Gentle manual 360 drag without trapping page wheel scroll
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = 0.15;
    controls.maxPolarAngle = Math.PI - 0.15;
    controls.target.set(0, -0.1, 0);
    controls.update();

    let userInteracting = false;
    const onControlStart = () => {
      userInteracting = true;
    };
    const onControlEnd = () => {
      userInteracting = false;
    };
    controls.addEventListener('start', onControlStart);
    controls.addEventListener('end', onControlEnd);

    const cosmicRoot = new THREE.Group();
    scene.add(cosmicRoot);

    const sunPos = new THREE.Vector3(6.5, 0.85, 6.5);
    const earthTarget = new THREE.Vector3(0, -0.1, 0);
    const sunBhRoot = new THREE.Group();
    sunBhRoot.position.copy(sunPos);
    scene.add(sunBhRoot);

    const state = {
      time: 0,
      wHero: 1.0,
      wSpacetime: 1.0,
      wEarth: 0.0,
      wSun: 0.0,
      wBlackHole: 0.0,
      wBridge: 0.0,
      orbitEarthToSunP: 0.0,
      viewW: width,
      viewH: height,
      lastShiftPx: -9999,
    };

    // ------------------------------------------------------------------
    // 1. DEEP STARFIELD BACKDROP (1,500 calm stars)
    // ------------------------------------------------------------------
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starPhases = new Float32Array(starCount);

    const starPalette = [
      new THREE.Color('#e0f2fe'),
      new THREE.Color('#fef3c7'),
      new THREE.Color('#fdba74'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#93c5fd'),
    ];

    for (let i = 0; i < starCount; i++) {
      const r = 24 + Math.random() * 52;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);

      const c = starPalette[i % starPalette.length];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
      starSizes[i] = 0.8 + Math.random() * 2.2;
      starPhases[i] = Math.random() * Math.PI * 2;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('aColor', new THREE.BufferAttribute(starColors, 3));
    starGeo.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
    starGeo.setAttribute('aPhase', new THREE.BufferAttribute(starPhases, 1));

    const starMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.25) },
      },
      vertexShader: `
        attribute vec3 aColor;
        attribute float aSize;
        attribute float aPhase;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uTime;
        uniform float uPixelRatio;

        void main() {
          vColor = aColor;
          vAlpha = 0.55 + 0.45 * sin(uTime * 1.1 + aPhase);
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPos;
          gl_PointSize = aSize * uPixelRatio * (45.0 / -mvPos.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          if (d > 0.5) discard;
          float glow = pow(1.0 - d * 2.0, 2.2);
          gl_FragColor = vec4(vColor, glow * vAlpha * 0.85);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // ------------------------------------------------------------------
    // 1B. LOAD 2K NASA / THREE.JS PLANET TEXTURES WITH MODULE-LEVEL CACHE
    // ------------------------------------------------------------------
    const maxAniso = Math.min(renderer.capabilities.getMaxAnisotropy() || 1, 8);
    const textureLoader = new THREE.TextureLoader();

    const loadPlanetMap = (url: string, onReady: () => void): THREE.Texture => {
      const existing = PLANET_TEXTURE_CACHE.get(url);
      if (existing) {
        if (existing.loaded) {
          onReady();
        } else {
          existing.callbacks.push(onReady);
        }
        return existing.tex;
      }

      const entry: CachedPlanetTexture = {
        tex: null as unknown as THREE.Texture,
        loaded: false,
        callbacks: [onReady],
      };
      const tex = textureLoader.load(url, () => {
        entry.loaded = true;
        const pending = entry.callbacks.splice(0);
        for (const cb of pending) cb();
      });
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.anisotropy = maxAniso;
      tex.colorSpace = THREE.NoColorSpace;
      entry.tex = tex;
      PLANET_TEXTURE_CACHE.set(url, entry);
      return tex;
    };

    // ------------------------------------------------------------------
    // 2. CENTRAL CELESTIAL MORPHING SPHERE (Spacetime -> Earth -> Sun -> Black Hole)
    // ------------------------------------------------------------------
    const coreGroup = new THREE.Group();
    cosmicRoot.add(coreGroup);

    const coreUniforms = {
      uTime: { value: 0 },
      uSpacetime: { value: 1.0 },
      uEarth: { value: 0.0 },
      uSun: { value: 0.0 },
      uBlackHole: { value: 0.0 },
      uEarthDayMap: { value: null as THREE.Texture | null },
      uEarthSpecMap: { value: null as THREE.Texture | null },
      uEarthNormalMap: { value: null as THREE.Texture | null },
      uEarthCloudsMap: { value: null as THREE.Texture | null },
      uEarthNightMap: { value: null as THREE.Texture | null },
      uSunMap: { value: null as THREE.Texture | null },
      uHasDayMap: { value: 0.0 },
      uHasSpecMap: { value: 0.0 },
      uHasNormalMap: { value: 0.0 },
      uHasCloudsMap: { value: 0.0 },
      uHasNightMap: { value: 0.0 },
      uHasSunMap: { value: 0.0 },
    };

    const sunBhCoreUniforms = {
      uTime: { value: 0 },
      uSun: { value: 0.0 },
      uBlackHole: { value: 0.0 },
      uSunMap: { value: null as THREE.Texture | null },
      uHasSunMap: { value: 0.0 },
    };

    const earthDayTex = loadPlanetMap('/textures/planets/earth_atmos_2048.jpg', () => {
      coreUniforms.uHasDayMap.value = 1.0;
    });
    const earthSpecTex = loadPlanetMap('/textures/planets/earth_specular_2048.jpg', () => {
      coreUniforms.uHasSpecMap.value = 1.0;
    });
    const earthNormalTex = loadPlanetMap('/textures/planets/earth_normal_2048.jpg', () => {
      coreUniforms.uHasNormalMap.value = 1.0;
    });
    const earthNightTex = loadPlanetMap('/textures/planets/earth_lights_2048.png', () => {
      coreUniforms.uHasNightMap.value = 1.0;
    });
    const sunPhotosphereTex = loadPlanetMap('/textures/planets/sun_photosphere.jpg', () => {
      coreUniforms.uHasSunMap.value = 1.0;
      sunBhCoreUniforms.uHasSunMap.value = 1.0;
    });

    coreUniforms.uEarthDayMap.value = earthDayTex;
    coreUniforms.uEarthSpecMap.value = earthSpecTex;
    coreUniforms.uEarthNormalMap.value = earthNormalTex;
    coreUniforms.uEarthNightMap.value = earthNightTex;
    coreUniforms.uSunMap.value = sunPhotosphereTex;
    sunBhCoreUniforms.uSunMap.value = sunPhotosphereTex;

    const coreMat = new THREE.ShaderMaterial({
      uniforms: coreUniforms,
      vertexShader: `
        #ifndef USE_TANGENT
        attribute vec4 tangent;
        #endif
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vTangentWorld;
        varying vec3 vBitangentWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;

        void main() {
          vUv = uv;
          vLocalDir = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;

          vec3 nLocal = normalize(normal);
          vec3 tLocal = length(tangent.xyz) > 0.0001
            ? normalize(tangent.xyz)
            : normalize(cross(abs(nLocal.y) < 0.999 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0), nLocal));

          vNormalWorld = normalize(mat3(modelMatrix) * nLocal);
          vTangentWorld = normalize(mat3(modelMatrix) * tLocal);
          vBitangentWorld = normalize(cross(vNormalWorld, vTangentWorld)) * (abs(tangent.w) > 0.5 ? tangent.w : 1.0);

          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vTangentWorld;
        varying vec3 vBitangentWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        uniform float uTime;
        uniform float uSpacetime;
        uniform float uEarth;
        uniform float uSun;
        uniform float uBlackHole;
        uniform sampler2D uEarthDayMap;
        uniform sampler2D uEarthSpecMap;
        uniform sampler2D uEarthNormalMap;
        uniform sampler2D uEarthCloudsMap;
        uniform sampler2D uEarthNightMap;
        uniform sampler2D uSunMap;
        uniform float uHasDayMap;
        uniform float uHasSpecMap;
        uniform float uHasNormalMap;
        uniform float uHasCloudsMap;
        uniform float uHasNightMap;
        uniform float uHasSunMap;
        ${GLSL_NOISE_3D}

        vec3 acesEarth(vec3 x) {
          return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
        }

        void main() {
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          vec3 L = normalize(vec3(0.92, 0.22, 0.24));
          float ndotv = clamp(dot(N, V), 0.0, 1.0);
          float fresnel = pow(1.0 - ndotv, 3.4);

          vec3 col = vec3(0.0);

          // --- STAGE 1: SPACETIME GRAVITY WELL NODE ---
          if (uSpacetime > 0.01) {
            float latLines = abs(fract(vLocalDir.y * 5.0 - uTime * 0.15) - 0.5);
            float lonLines = abs(fract(atan(vLocalDir.z, vLocalDir.x) * 3.183) - 0.5);
            float meshGlow = smoothstep(0.08, 0.01, min(latLines, lonLines));
            vec3 stCol = vec3(0.08, 0.14, 0.38)
              + vec3(0.38, 0.62, 1.0) * fresnel * 1.6
              + vec3(0.28, 0.90, 1.0) * meshGlow * 1.1;
            col += stCol * uSpacetime;
          }

          // --- STAGE 2: PHOTOREALISTIC 2K NASA EARTH (Terrain relief, clouds shadow, ocean glint, night lights) ---
          if (uEarth > 0.01) {
            float lat = abs(vLocalDir.y);

            // Procedural fallback albedo + water mask if 2K maps are still streaming
            vec3 pEarth = vLocalDir * 2.15 + vec3(0.0, 0.25, 0.0);
            float procElev = fbm3(pEarth);
            float procLand = smoothstep(0.495, 0.525, procElev);
            vec3 procOcean = mix(vec3(0.02, 0.14, 0.42), vec3(0.06, 0.42, 0.68), smoothstep(0.32, 0.5, procElev));
            vec3 procTerrain = mix(vec3(0.11, 0.44, 0.22), vec3(0.66, 0.53, 0.32), smoothstep(0.45, 0.66, procElev));
            vec3 procAlbedo = mix(procOcean, procTerrain, procLand);
            procAlbedo = mix(procAlbedo, vec3(0.92, 0.96, 1.0), smoothstep(0.78, 0.92, lat));

            vec3 dayTex = uHasDayMap > 0.5 ? texture2D(uEarthDayMap, vUv).rgb : procAlbedo;
            float specMask = uHasSpecMap > 0.5 ? texture2D(uEarthSpecMap, vUv).r : (1.0 - procLand);

            // Convert sRGB satellite albedo to rich physical linear color
            vec3 albedoLin = pow(max(dayTex, vec3(0.001)), vec3(2.2));
            // Enhance deep sapphire/turquoise oceans & lush green foliage while keeping desert realism
            vec3 oceanEnriched = mix(albedoLin, vec3(0.009, 0.052, 0.215), 0.38);
            float vegMask = smoothstep(0.01, 0.08, albedoLin.g - albedoLin.r * 0.85) * (1.0 - specMask);
            vec3 landEnriched = mix(albedoLin, albedoLin * vec3(0.94, 1.18, 0.92), vegMask * 0.55);
            albedoLin = mix(landEnriched, oceanEnriched, specMask);

            // Tangent-space 2K normal mapping for mountain topography (Himalayas, Andes, Alps)
            vec3 N_earth = N;
            if (uHasNormalMap > 0.5) {
              vec3 mapN = texture2D(uEarthNormalMap, vUv).xyz * 2.0 - 1.0;
              mapN.xy *= mix(1.85, 0.25, specMask);
              vec3 T = normalize(vTangentWorld - N * dot(N, vTangentWorld));
              vec3 B = normalize(vBitangentWorld - N * dot(N, vBitangentWorld));
              N_earth = normalize(T * mapN.x + B * mapN.y + N * max(mapN.z, 0.2));
            }

            // Realistic soft cloud layer shadow projected onto Earth's surface
            vec2 cloudShadowUv = vec2(fract(vUv.x + uTime * 0.0032 - 0.0045), clamp(vUv.y - 0.0028, 0.001, 0.999));
            float cloudShadowSample = uHasCloudsMap > 0.5
              ? texture2D(uEarthCloudsMap, cloudShadowUv).a
              : smoothstep(0.51, 0.72, fbm3(vLocalDir * 2.9 + vec3(uTime * 0.014, 0.0, -uTime * 0.009)));
            float cloudShadow = smoothstep(0.12, 0.85, cloudShadowSample) * 0.32;

            float ndotlGeo = dot(N, L);
            float ndotlSurf = max(dot(N_earth, L), 0.0);
            float wrapDiff = clamp((dot(N_earth, L) + 0.08) / 1.08, 0.0, 1.0);
            float terminatorSoft = smoothstep(-0.14, 0.18, ndotlGeo);

            // Sunlit irradiance + subtle moonlight blue ambient on shadow side
            vec3 sunIrradiance = vec3(2.45, 2.34, 2.18) * pow(wrapDiff, 0.92) * terminatorSoft * (1.0 - cloudShadow);
            vec3 spaceAmbient = mix(vec3(0.005, 0.012, 0.030), vec3(0.018, 0.044, 0.095), terminatorSoft);

            // Warm Rayleigh twilight scattering belt right across the terminator
            float twilightBand = smoothstep(-0.20, 0.02, ndotlGeo) * (1.0 - smoothstep(0.02, 0.26, ndotlGeo));
            vec3 twilightScatter = vec3(1.0, 0.38, 0.12) * twilightBand * 0.26;

            vec3 earthLin = albedoLin * (sunIrradiance + spaceAmbient) + albedoLin * twilightScatter;

            // Dual-lobe solar specular reflection across calm oceans (attenuated under clouds)
            vec3 N_water = normalize(mix(N_earth, N, 0.75));
            vec3 H = normalize(L + V);
            float ndoth = max(dot(N_water, H), 0.0);
            float oceanSpec = (pow(ndoth, 76.0) * 1.35 + pow(ndoth, 18.0) * 0.26)
              * specMask
              * (1.0 - cloudShadow * 1.15)
              * smoothstep(0.0, 0.22, ndotlGeo);
            earthLin += vec3(1.1, 0.98, 0.86) * oceanSpec;

            // Night-side city networks glow (filter dark ocean background noise < 0.16)
            float nightFactor = smoothstep(0.12, -0.20, ndotlGeo);
            float nightRaw = uHasNightMap > 0.5
              ? dot(texture2D(uEarthNightMap, vUv).rgb, vec3(0.45, 0.42, 0.13))
              : smoothstep(0.68, 0.80, noise3D(vLocalDir * 24.0)) * (1.0 - specMask);
            float nightCities = smoothstep(0.16, 0.78, nightRaw);
            vec3 nightGlow = mix(vec3(1.0, 0.48, 0.12), vec3(1.0, 0.84, 0.46), nightCities)
              * pow(nightCities, 1.1) * nightFactor * (1.0 - cloudShadow * 0.6) * 2.4;
            earthLin += nightGlow;

            // Crisp directional Rayleigh blue atmospheric Fresnel scatter on Earth's limb
            float limbFactor = pow(1.0 - ndotv, 3.15);
            float litLimb = smoothstep(-0.28, 0.48, ndotlGeo);
            vec3 atmoRim = mix(vec3(0.14, 0.42, 0.95), vec3(0.28, 0.78, 1.0), litLimb);
            earthLin += atmoRim * limbFactor * (0.28 + 1.05 * litLimb);
            earthLin += vec3(1.0, 0.44, 0.18) * twilightBand * limbFactor * 0.55;

            vec3 earthSrgb = pow(acesEarth(earthLin), vec3(1.0 / 2.2));
            col += earthSrgb * uEarth;
          }

          // --- STAGE 3: DIRECT-SRGB FIERY BLACKBODY SOLAR PHOTOSPHERE ---
          if (uSun > 0.01) {
            float latSun = vLocalDir.y;
            float diffRot = (0.012 - 0.0045 * latSun * latSun) * uTime;

            vec3 warp = vec3(
              fbm3(vLocalDir * 2.8 + vec3(uTime * 0.045, 0.0, 0.0)),
              fbm3(vLocalDir * 2.8 + vec3(0.0, -uTime * 0.038, 5.2)),
              fbm3(vLocalDir * 2.8 + vec3(8.4, 0.0, uTime * 0.042))
            );
            vec3 pSun = vLocalDir * 5.8 + (warp - 0.5) * 1.5;
            float granMacro = fbm3(pSun * 1.15 - vec3(uTime * 0.04));
            float granMid = fbm3(pSun * 3.2 + vec3(uTime * 0.08, -uTime * 0.06, uTime * 0.05));
            float granFine = noise3D(pSun * 9.5 + vec3(uTime * 0.18, -uTime * 0.15, uTime * 0.14));
            float filaments = pow(1.0 - abs(noise3D(pSun * 4.6 + vec3(uTime * 0.1)) * 2.0 - 1.0), 2.4);

            vec2 sunUv = vec2(
              vUv.x + diffRot + (warp.x - 0.5) * 0.018,
              clamp(vUv.y + (warp.y - 0.5) * 0.018, 0.002, 0.998)
            );
            float texLum = uHasSunMap > 0.5
              ? dot(texture2D(uSunMap, sunUv).rgb, vec3(0.32, 0.52, 0.16))
              : 0.85;
            float texDetail = clamp((texLum - 0.85) * 4.0, -0.20, 0.20) * uHasSunMap;

            float plasma = clamp(granMacro * 0.25 + granMid * 0.45 + granFine * 0.30 + texDetail, 0.0, 1.0);

            float spotField = fbm3(vLocalDir * 3.4 + vec3(2.1, -uTime * 0.015, 1.3));
            float umbra = smoothstep(0.23, 0.15, spotField);
            float penumbra = smoothstep(0.32, 0.21, spotField) * (1.0 - umbra);

            vec3 deepCrimson = vec3(0.42, 0.05, 0.004);
            vec3 fieryOrange = vec3(0.96, 0.28, 0.015);
            vec3 moltenGold = vec3(1.00, 0.64, 0.08);
            vec3 whiteHot = vec3(1.00, 0.95, 0.76);

            vec3 sunCol = mix(deepCrimson, fieryOrange, smoothstep(0.18, 0.46, plasma));
            sunCol = mix(sunCol, moltenGold, smoothstep(0.46, 0.74, plasma));
            sunCol = mix(sunCol, whiteHot, smoothstep(0.74, 0.94, plasma + filaments * 0.22));
            sunCol = mix(sunCol, vec3(0.35, 0.06, 0.008), penumbra * 0.82);
            sunCol = mix(sunCol, vec3(0.06, 0.008, 0.002), umbra * 0.95);

            // Physical Eddington limb darkening & blazing multi-layer chromospheric rim
            float limbDark = mix(0.32, 1.06, pow(ndotv, 0.48));
            sunCol *= limbDark;
            float rimInner = pow(1.0 - ndotv, 2.2);
            float rimOuter = pow(1.0 - ndotv, 4.5);
            sunCol += vec3(1.0, 0.52, 0.08) * rimInner * (0.55 + 0.35 * filaments);
            sunCol += vec3(1.0, 0.92, 0.62) * rimOuter * (0.95 + 0.45 * filaments);

            col += clamp(sunCol, 0.0, 1.0) * uSun;
          }

          // --- STAGE 4: BLACK HOLE GARGANTUA CORE ---
          if (uBlackHole > 0.01) {
            float photonRim = pow(1.0 - ndotv, 9.5) * 1.15;
            vec3 bhCol = vec3(0.002, 0.003, 0.006) + vec3(1.0, 0.90, 0.76) * photonRim;
            col += bhCol * uBlackHole;
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const coreGeo = new THREE.SphereGeometry(1.15, 96, 96);
    coreGeo.computeTangents?.();
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    // Start rotation angle so Asia/Vietnam/Indian Ocean rotate cleanly across the camera view in Stage 2
    coreMesh.rotation.y = -1.65;
    coreGroup.add(coreMesh);

    // 2A-BIS. DEDICATED SUN + BLACK HOLE CORE AT sunBhRoot (z = -18, behind Earth)
    const sunBhCoreGroup = new THREE.Group();
    sunBhRoot.add(sunBhCoreGroup);

    const sunBhCoreMat = new THREE.ShaderMaterial({
      uniforms: sunBhCoreUniforms,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;

        void main() {
          vUv = uv;
          vLocalDir = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;

        uniform float uTime;
        uniform float uSun;
        uniform float uBlackHole;
        uniform sampler2D uSunMap;
        uniform float uHasSunMap;

        ${GLSL_NOISE_3D}

        void main() {
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          float ndotv = clamp(dot(N, V), 0.0, 1.0);
          vec3 col = vec3(0.0);

          // --- STAGE 3: DIRECT-SRGB FIERY BLACKBODY SOLAR PHOTOSPHERE ---
          if (uSun > 0.01) {
            float latSun = vLocalDir.y;
            float diffRot = (0.012 - 0.0045 * latSun * latSun) * uTime;

            vec3 warp = vec3(
              fbm3(vLocalDir * 2.8 + vec3(uTime * 0.045, 0.0, 0.0)),
              fbm3(vLocalDir * 2.8 + vec3(0.0, -uTime * 0.038, 5.2)),
              fbm3(vLocalDir * 2.8 + vec3(8.4, 0.0, uTime * 0.042))
            );
            vec3 pSun = vLocalDir * 5.8 + (warp - 0.5) * 1.5;
            float granMacro = fbm3(pSun * 1.15 - vec3(uTime * 0.04));
            float granMid = fbm3(pSun * 3.2 + vec3(uTime * 0.08, -uTime * 0.06, uTime * 0.05));
            float granFine = noise3D(pSun * 9.5 + vec3(uTime * 0.18, -uTime * 0.15, uTime * 0.14));
            float filaments = pow(1.0 - abs(noise3D(pSun * 4.6 + vec3(uTime * 0.1)) * 2.0 - 1.0), 2.4);

            vec2 sunUv = vec2(
              vUv.x + diffRot + (warp.x - 0.5) * 0.018,
              clamp(vUv.y + (warp.y - 0.5) * 0.018, 0.002, 0.998)
            );
            float texLum = uHasSunMap > 0.5
              ? dot(texture2D(uSunMap, sunUv).rgb, vec3(0.32, 0.52, 0.16))
              : 0.85;
            float texDetail = clamp((texLum - 0.85) * 4.0, -0.20, 0.20) * uHasSunMap;

            float plasma = clamp(granMacro * 0.25 + granMid * 0.45 + granFine * 0.30 + texDetail, 0.0, 1.0);

            float spotField = fbm3(vLocalDir * 3.4 + vec3(2.1, -uTime * 0.015, 1.3));
            float umbra = smoothstep(0.23, 0.15, spotField);
            float penumbra = smoothstep(0.32, 0.21, spotField) * (1.0 - umbra);

            vec3 deepCrimson = vec3(0.42, 0.05, 0.004);
            vec3 fieryOrange = vec3(0.96, 0.28, 0.015);
            vec3 moltenGold = vec3(1.00, 0.64, 0.08);
            vec3 whiteHot = vec3(1.00, 0.95, 0.76);

            vec3 sunCol = mix(deepCrimson, fieryOrange, smoothstep(0.18, 0.46, plasma));
            sunCol = mix(sunCol, moltenGold, smoothstep(0.46, 0.74, plasma));
            sunCol = mix(sunCol, whiteHot, smoothstep(0.74, 0.94, plasma + filaments * 0.22));
            sunCol = mix(sunCol, vec3(0.35, 0.06, 0.008), penumbra * 0.82);
            sunCol = mix(sunCol, vec3(0.06, 0.008, 0.002), umbra * 0.95);

            // Physical Eddington limb darkening & blazing multi-layer chromospheric rim
            float limbDark = mix(0.32, 1.06, pow(ndotv, 0.48));
            sunCol *= limbDark;
            float rimInner = pow(1.0 - ndotv, 2.2);
            float rimOuter = pow(1.0 - ndotv, 4.5);
            sunCol += vec3(1.0, 0.52, 0.08) * rimInner * (0.55 + 0.35 * filaments);
            sunCol += vec3(1.0, 0.92, 0.62) * rimOuter * (0.95 + 0.45 * filaments);

            col += clamp(sunCol, 0.0, 1.0) * uSun;
          }

          // --- STAGE 4: BLACK HOLE GARGANTUA CORE ---
          if (uBlackHole > 0.01) {
            float photonRim = pow(1.0 - ndotv, 9.5) * 1.15;
            vec3 bhCol = vec3(0.002, 0.003, 0.006) + vec3(1.0, 0.90, 0.76) * photonRim;
            col += bhCol * uBlackHole;
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });

    const sunBhCoreMesh = new THREE.Mesh(new THREE.SphereGeometry(1.15, 96, 96), sunBhCoreMat);
    sunBhCoreGroup.add(sunBhCoreMesh);

    // 2B. ELEVATED 3D VOLUMETRIC EARTH CLOUD SPHERE (inherits axial tilt & slow spin from coreMesh)
    const cloudUniforms = {
      uTime: { value: 0 },
      uEarth: { value: 0.0 },
      uEarthCloudsMap: { value: null as THREE.Texture | null },
      uHasCloudsMap: { value: 0.0 },
    };

    const earthCloudsTex = loadPlanetMap('/textures/planets/earth_clouds_1024.png', () => {
      coreUniforms.uHasCloudsMap.value = 1.0;
      cloudUniforms.uHasCloudsMap.value = 1.0;
    });
    coreUniforms.uEarthCloudsMap.value = earthCloudsTex;
    cloudUniforms.uEarthCloudsMap.value = earthCloudsTex;

    const earthCloudMat = new THREE.ShaderMaterial({
      uniforms: cloudUniforms,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        void main() {
          vUv = uv;
          vLocalDir = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        uniform float uTime;
        uniform float uEarth;
        uniform sampler2D uEarthCloudsMap;
        uniform float uHasCloudsMap;
        ${GLSL_NOISE_3D}

        void main() {
          if (uEarth < 0.015) discard;
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          vec3 L = normalize(vec3(0.92, 0.22, 0.24));

          vec2 cloudUv = vec2(fract(vUv.x + uTime * 0.0032), vUv.y);
          float rawCloud = uHasCloudsMap > 0.5
            ? (
                texture2D(uEarthCloudsMap, cloudUv).a * 0.40 +
                texture2D(uEarthCloudsMap, vec2(fract(cloudUv.x + 0.0014), cloudUv.y)).a * 0.15 +
                texture2D(uEarthCloudsMap, vec2(fract(cloudUv.x - 0.0014), cloudUv.y)).a * 0.15 +
                texture2D(uEarthCloudsMap, vec2(cloudUv.x, clamp(cloudUv.y + 0.0014, 0.001, 0.999))).a * 0.15 +
                texture2D(uEarthCloudsMap, vec2(cloudUv.x, clamp(cloudUv.y - 0.0014, 0.001, 0.999))).a * 0.15
              )
            : smoothstep(0.50, 0.72, fbm3(vLocalDir * 2.9 + vec3(uTime * 0.014, 0.0, -uTime * 0.009)));
          float cloudDensity = pow(smoothstep(0.08, 0.76, rawCloud), 1.2);
          if (cloudDensity < 0.008) discard;

          float ndotl = dot(N, L);
          float ndotv = clamp(dot(N, V), 0.0, 1.0);
          float dayLit = smoothstep(-0.14, 0.24, ndotl);
          float twilight = smoothstep(-0.20, 0.02, ndotl) * (1.0 - smoothstep(0.02, 0.26, ndotl));
          float limbSilver = pow(1.0 - ndotv, 2.6) * smoothstep(-0.15, 0.45, ndotl);

          vec3 dayWhite = vec3(0.96, 0.98, 1.0);
          vec3 sunsetCoral = vec3(1.0, 0.62, 0.38);
          vec3 nightBlue = vec3(0.06, 0.11, 0.22);

          vec3 cloudCol = mix(nightBlue, dayWhite, dayLit);
          cloudCol = mix(cloudCol, sunsetCoral, twilight * 0.72);
          cloudCol += vec3(0.45, 0.78, 1.0) * limbSilver * 0.25;

          float alpha = cloudDensity * (0.14 + 0.46 * dayLit) * uEarth;
          gl_FragColor = vec4(cloudCol, clamp(alpha, 0.0, 0.62));
        }
      `,
      transparent: true,
      depthWrite: false,
    });

    const earthCloudMesh = new THREE.Mesh(new THREE.SphereGeometry(1.168, 80, 80), earthCloudMat);
    coreMesh.add(earthCloudMesh);

    // 2C. TIGHT RAYLEIGH ORBITAL ATMOSPHERE SHELL FOR STAGE 2 EARTH (ISS-like thin crisp blue horizon limb)
    const earthAtmoUniforms = {
      uEarth: { value: 0.0 },
    };
    const earthAtmoMat = new THREE.ShaderMaterial({
      uniforms: earthAtmoUniforms,
      vertexShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        uniform float uEarth;
        void main() {
          if (uEarth < 0.015) discard;
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          vec3 L = normalize(vec3(0.92, 0.22, 0.24));

          // d = dot(-N, V) reaches ~0.345 right at Earth's surface (1.15 / 1.225 = 0.9387)
          float d = clamp(dot(-N, V), 0.0, 1.0);
          float rimBand = pow(clamp(1.0 - d * 1.45, 0.0, 1.0), 2.4) * smoothstep(0.0, 0.36, d);

          float ndotl = dot(N, L);
          float litSide = smoothstep(-0.35, 0.45, ndotl);
          float twilight = smoothstep(-0.22, 0.02, ndotl) * (1.0 - smoothstep(0.02, 0.30, ndotl));

          vec3 col = mix(vec3(0.08, 0.28, 0.72), vec3(0.24, 0.74, 1.0), litSide);
          col = mix(col, vec3(1.0, 0.48, 0.22), twilight * 0.45);
          float alpha = rimBand * (0.28 + 0.72 * litSide) * uEarth * 0.95;
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.92));
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const earthAtmoMesh = new THREE.Mesh(new THREE.SphereGeometry(1.225, 72, 72), earthAtmoMat);
    coreGroup.add(earthAtmoMesh);

    // 2D. DEDICATED SOLAR PROMINENCE & MAGNETIC FLARE SHELL FOR STAGE 3 SUN
    const sunProminenceUniforms = {
      uTime: { value: 0 },
      uSun: { value: 0.0 },
    };
    const sunProminenceMat = new THREE.ShaderMaterial({
      uniforms: sunProminenceUniforms,
      vertexShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        void main() {
          vLocalDir = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        uniform float uTime;
        uniform float uSun;
        ${GLSL_NOISE_3D}

        void main() {
          if (uSun < 0.015) discard;
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          float d = clamp(dot(-N, V), 0.0, 1.0);

          // Tight 3D chromospheric plasma rim with zero-edge fade
          float edgeZero = smoothstep(0.10, 0.42, d) * pow(clamp(d / 0.56, 0.0, 1.0), 2.4) * (1.0 - smoothstep(0.50, 0.64, d));

          float archNoise = fbm3(vLocalDir * 5.2 + vec3(uTime * 0.14, -uTime * 0.10, uTime * 0.12));
          float plumeMask = smoothstep(0.46, 0.84, archNoise);
          float archFilaments = pow(1.0 - abs(noise3D(vLocalDir * 12.0 - vec3(uTime * 0.24)) * 2.0 - 1.0), 2.3);

          float intensity = edgeZero * plumeMask * (0.52 + 0.95 * archFilaments);

          vec3 baseGold = vec3(1.0, 0.68, 0.14);
          vec3 outerCrimson = vec3(0.96, 0.22, 0.02);
          vec3 flareCol = mix(outerCrimson, baseGold, smoothstep(0.18, 0.52, d));

          float alpha = clamp(intensity * uSun * 1.5, 0.0, 0.92);
          gl_FragColor = vec4(flareCol * 1.25, alpha);
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const sunProminenceMesh = new THREE.Mesh(new THREE.SphereGeometry(1.28, 72, 72), sunProminenceMat);
    sunBhCoreGroup.add(sunProminenceMesh);

    // 2E. CAMERA-FACING VOLUMETRIC SOLAR CORONA STREAMERS, PROMINENCES & BLOOM HALO
    const sunCoronaBillboardUniforms = {
      uTime: { value: 0 },
      uSun: { value: 0.0 },
    };
    const sunCoronaBillboardMat = new THREE.ShaderMaterial({
      uniforms: sunCoronaBillboardUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uSun;
        ${GLSL_NOISE_3D}

        void main() {
          vec2 p = (vUv - 0.5) * 2.0;
          float r = length(p);
          float theta = atan(p.y, p.x);

          if (uSun < 0.015 || r > 0.96) discard;

          float edgeFade = 1.0 - smoothstep(0.66, 0.94, r);
          float dist = max(r - 0.345, 0.0);

          // 1. Blazing inner K-corona rim & over-the-limb optical scatter
          float innerCorona = exp(-dist * 15.5) * smoothstep(0.26, 0.348, r) * edgeFade;

          // 2. Dynamic multi-scale radial coronal helmet streamers
          float n1 = fbm3(vec3(cos(theta) * 2.4, sin(theta) * 2.4, uTime * 0.06 - r * 0.7));
          float n2 = fbm3(vec3(cos(theta) * 6.2, sin(theta) * 6.2, -uTime * 0.09 + r * 1.4));
          float fineRays = 0.5 + 0.5 * sin(theta * 16.0 + n1 * 5.2 + uTime * 0.14);
          float rayMask = pow(clamp(n1 * 0.46 + n2 * 0.36 + fineRays * 0.18, 0.0, 1.0), 1.55);
          float streamers = rayMask * exp(-dist * 4.6) * smoothstep(0.31, 0.355, r) * edgeFade;

          // 3. Erupting magnetic prominence arches near the chromospheric rim
          float promNoise = pow(clamp(fbm3(vec3(cos(theta) * 4.8 + uTime * 0.08, sin(theta) * 4.8 - uTime * 0.07, uTime * 0.15)), 0.0, 1.0), 2.8);
          float prominences = promNoise * exp(-dist * 22.0) * smoothstep(0.33, 0.352, r) * edgeFade;

          // 4. Wide fiery golden-amber atmospheric corona halo & subtle lens starburst glint
          float wideHalo = exp(-dist * 3.1) * smoothstep(0.24, 0.352, r) * edgeFade;
          float glint = (exp(-abs(p.y) * 26.0) * exp(-abs(p.x) * 2.8) + exp(-abs(p.x) * 30.0) * exp(-abs(p.y) * 3.4))
            * smoothstep(0.30, 0.355, r) * edgeFade * 0.26;

          vec3 whiteGold = vec3(1.0, 0.95, 0.76);
          vec3 moltenAmber = vec3(1.0, 0.62, 0.12);
          vec3 solarOrange = vec3(0.98, 0.30, 0.03);
          vec3 deepCrimson = vec3(0.82, 0.12, 0.01);

          vec3 col =
            whiteGold * (innerCorona * 0.95 + glint) +
            moltenAmber * (innerCorona * 0.48 + streamers * 0.78 + wideHalo * 0.36) +
            solarOrange * (streamers * 0.68 + prominences * 1.1 + wideHalo * 0.52) +
            deepCrimson * (prominences * 0.55 + wideHalo * 0.30);

          float alpha = clamp(
            (innerCorona * 0.78 + streamers * 0.62 + prominences * 0.85 + wideHalo * 0.38 + glint) * uSun,
            0.0,
            0.95
          );

          gl_FragColor = vec4(clamp(col, 0.0, 1.35), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });

    const sunCoronaBillboard = new THREE.Mesh(new THREE.PlaneGeometry(6.6, 6.6), sunCoronaBillboardMat);
    sunCoronaBillboard.visible = false;
    sunCoronaBillboard.renderOrder = 4;
    sunBhCoreGroup.add(sunCoronaBillboard);

    // Outer Atmosphere / Solar Corona / Gravitational Scattering Halo (BackSide Sphere)
    const coronaUniforms = {
      uTime: { value: 0 },
      uSpacetime: { value: 1.0 },
      uEarth: { value: 0.0 },
      uSun: { value: 0.0 },
      uBlackHole: { value: 0.0 },
    };

    const coronaMat = new THREE.ShaderMaterial({
      uniforms: coronaUniforms,
      vertexShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        void main() {
          vLocalDir = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        uniform float uTime;
        uniform float uSpacetime;
        uniform float uEarth;
        uniform float uSun;
        uniform float uBlackHole;
        ${GLSL_NOISE_3D}

        void main() {
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          float d = clamp(dot(-N, V), 0.0, 1.0);
          float softHalo = pow(clamp(1.0 - d * 1.32, 0.0, 1.0), 2.3) * smoothstep(0.0, 0.34, d);

          vec3 stCol = vec3(0.45, 0.52, 1.0) * 1.15 * softHalo;
          // Earth relies primarily on tight earthAtmoMesh; keep outer scattering whisper-subtle
          vec3 earthAtmo = vec3(0.18, 0.62, 1.0) * 0.32 * softHalo;
          vec3 bhHalo = vec3(1.0, 0.60, 0.20) * 1.3 * softHalo;

          vec3 col = stCol * uSpacetime + earthAtmo * uEarth + bhHalo * uBlackHole;
          float alpha = softHalo * (uSpacetime * 0.7 + uEarth * 0.22 + uBlackHole * 0.8);
          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.95));
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const coronaMesh = new THREE.Mesh(new THREE.SphereGeometry(1.62, 48, 48), coronaMat);
    coreGroup.add(coronaMesh);

    // Black Hole gravitational scattering halo attached to sunBhCoreGroup
    const bhCoronaUniforms = {
      uBlackHole: { value: 0.0 },
    };
    const bhCoronaMat = new THREE.ShaderMaterial({
      uniforms: bhCoronaUniforms,
      vertexShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        uniform float uBlackHole;
        void main() {
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          float d = clamp(dot(-N, V), 0.0, 1.0);
          float softHalo = pow(clamp(1.0 - d * 1.75, 0.0, 1.0), 3.6) * smoothstep(0.0, 0.25, d);
          vec3 bhHalo = vec3(1.0, 0.85, 0.68) * 0.08 * softHalo;
          gl_FragColor = vec4(bhHalo * uBlackHole, clamp(softHalo * uBlackHole * 0.12, 0.0, 0.18));
        }
      `,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const bhCoronaMesh = new THREE.Mesh(new THREE.SphereGeometry(1.26, 48, 48), bhCoronaMat);
    sunBhCoreGroup.add(bhCoronaMesh);

    // ------------------------------------------------------------------
    // 3. EINSTEIN SPACETIME GRAVITY WELL GRID (Stage 1 + subtle Stage 4)
    // ------------------------------------------------------------------
    const gridUniforms = {
      uTime: { value: 0 },
      uGridOpacity: { value: 0.82 },
    };

    const gridGeo = new THREE.PlaneGeometry(14.5, 14.5, 72, 72);
    gridGeo.rotateX(-Math.PI / 2);

    const gridMat = new THREE.ShaderMaterial({
      uniforms: gridUniforms,
      vertexShader: `
        varying vec3 vGridPos;
        varying float vDepth;
        varying float vRadius;
        uniform float uTime;

        void main() {
          vec3 pos = position;
          float r = length(pos.xz);
          vRadius = r;

          float well = -2.45 / pow(r * r + 0.72, 0.62);
          float gwRipple = sin(r * 3.4 - uTime * 1.8) * 0.065 * exp(-r * 0.22);

          pos.y = well + gwRipple - 0.35;
          vDepth = clamp(-well / 2.5, 0.0, 1.0);
          vGridPos = pos;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vGridPos;
        varying float vDepth;
        varying float vRadius;
        uniform float uGridOpacity;

        void main() {
          vec2 coord = vGridPos.xz * 1.1;
          vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
          float line = min(grid.x, grid.y);
          float cartMask = 1.0 - min(line, 1.0);

          float radRing = abs(fract(vRadius * 0.85 - 0.5) - 0.5) / fwidth(vRadius * 0.85);
          float radMask = (1.0 - min(radRing, 1.0)) * 0.7;

          float mask = max(cartMask, radMask);
          float edgeFade = 1.0 - smoothstep(4.6, 7.1, vRadius);

          vec3 col = mix(vec3(0.35, 0.42, 0.96), vec3(0.18, 0.86, 1.0), smoothstep(0.15, 0.58, vDepth));
          col = mix(col, vec3(1.0, 0.66, 0.22), smoothstep(0.55, 0.95, vDepth));

          float alpha = mask * edgeFade * uGridOpacity * (0.58 + 0.9 * vDepth);
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(col, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const gravityGrid = new THREE.Mesh(gridGeo, gridMat);
    cosmicRoot.add(gravityGrid);

    // ------------------------------------------------------------------
    // 4. ORBITING PHOTOGRAPHIC CRATERED MOON & TRAJECTORY RING (Stages 1 & 2)
    // ------------------------------------------------------------------
    const moonUniforms = {
      uMoonMap: { value: null as THREE.Texture | null },
      uHasMoonMap: { value: 0.0 },
      uSpacetime: { value: 1.0 },
      uEarth: { value: 0.0 },
    };
    const moonTex = loadPlanetMap('/textures/planets/moon_1024.jpg', () => {
      moonUniforms.uHasMoonMap.value = 1.0;
    });
    moonUniforms.uMoonMap.value = moonTex;

    const moonMat = new THREE.ShaderMaterial({
      uniforms: moonUniforms,
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        void main() {
          vUv = uv;
          vLocalDir = normalize(position);
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPos = worldPos.xyz;
          vNormalWorld = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormalWorld;
        varying vec3 vWorldPos;
        varying vec3 vLocalDir;
        uniform sampler2D uMoonMap;
        uniform float uHasMoonMap;
        uniform float uSpacetime;
        uniform float uEarth;
        ${GLSL_NOISE_3D}

        void main() {
          vec3 N = normalize(vNormalWorld);
          vec3 V = normalize(cameraPosition - vWorldPos);
          vec3 L = normalize(vec3(0.92, 0.22, 0.24));

          // Stage 1 (Spacetime Gravity Well): Clean luminous white orbiting body
          float ndotv = clamp(dot(N, V), 0.0, 1.0);
          vec3 whiteSphereCol = vec3(0.95, 0.97, 1.0) + vec3(0.85, 0.94, 1.0) * pow(1.0 - ndotv, 2.2) * 0.4;

          // Stage 2 (Earth): Photographic 1K cratered Moon lit by the Sun + earthshine
          vec3 procMoon = vec3(0.58) * (0.72 + 0.35 * fbm3(vLocalDir * 6.5));
          vec3 moonTexCol = uHasMoonMap > 0.5 ? texture2D(uMoonMap, vUv).rgb : procMoon;
          vec3 moonLin = pow(max(moonTexCol, vec3(0.002)), vec3(1.85));

          float craterMicro = fbm3(vLocalDir * 14.0);
          float lit = smoothstep(-0.08, 0.25, dot(N, L)) * (0.78 + 0.35 * craterMicro);
          vec3 earthshine = vec3(0.04, 0.09, 0.18) * uEarth;
          vec3 moonCol = moonLin * (lit * 1.45 + 0.05) + earthshine;
          vec3 moonSrgb = pow(clamp(moonCol, 0.0, 1.0), vec3(1.0 / 2.0));

          float moonMorph = smoothstep(0.08, 0.92, clamp(uEarth / max(uSpacetime + uEarth, 0.001), 0.0, 1.0));
          gl_FragColor = vec4(mix(whiteSphereCol, moonSrgb, moonMorph), 1.0);
        }
      `,
    });
    const moonMesh = new THREE.Mesh(new THREE.SphereGeometry(0.21, 48, 48), moonMat);
    cosmicRoot.add(moonMesh);

    const orbitSegments = 128;
    const orbitPts: THREE.Vector3[] = [];
    for (let i = 0; i < orbitSegments; i++) {
      const a = (i / orbitSegments) * Math.PI * 2;
      orbitPts.push(new THREE.Vector3(1.98 * Math.cos(a), 0.36 * Math.sin(a) - 0.10 * Math.cos(a), 1.98 * Math.sin(a)));
    }
    const moonOrbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPts);
    const moonOrbitMat = new THREE.LineBasicMaterial({
      color: new THREE.Color('#7dd3fc'),
      transparent: true,
      opacity: 0.0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const moonOrbitLine = new THREE.LineLoop(moonOrbitGeo, moonOrbitMat);
    cosmicRoot.add(moonOrbitLine);

    // ------------------------------------------------------------------
    // 5. BLACK HOLE RELATIVISTIC ACCRETION DISK & EINSTEIN HALO (Stage 4)
    // ------------------------------------------------------------------
    const diskUniforms = {
      uTime: { value: 0 },
      uBlackHole: { value: 0.0 },
    };

    const diskGeo = new THREE.RingGeometry(1.14, 6.2, 112, 18);
    const diskMat = new THREE.ShaderMaterial({
      uniforms: diskUniforms,
      vertexShader: `
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec3 vWorldVelDir;
        uniform float uTime;
        void main() {
          vec3 pos = position;
          float r = length(pos.xy);
          float angle = atan(pos.y, pos.x);
          float t = clamp((r - 1.14) / (6.2 - 1.14), 0.0, 1.0);
          // Subtle organic vertical plasma undulation so the disk never looks like a rigid flat ruler
          pos.z += (sin(angle * 3.0 - uTime * 0.45 + r * 2.2) * 0.045 + cos(angle * 5.0 + uTime * 0.3 - r * 1.6) * 0.025) * smoothstep(0.05, 0.75, t);
          vLocalPos = pos;
          vec4 worldPos = modelMatrix * vec4(pos, 1.0);
          vWorldPos = worldPos.xyz;
          vec3 localTangent = cross(vec3(0.0, 0.0, 1.0), normalize(position + vec3(0.0001)));
          vWorldVelDir = normalize(mat3(modelMatrix) * localTangent);
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,
      fragmentShader: `
        varying vec3 vWorldPos;
        varying vec3 vLocalPos;
        varying vec3 vWorldVelDir;
        uniform float uTime;
        uniform float uBlackHole;
        ${GLSL_NOISE_3D}

        void main() {
          if (uBlackHole < 0.01) discard;
          float r = length(vLocalPos.xy);
          float angle = atan(vLocalPos.y, vLocalPos.x);

          // Steady-pitch spiral rotation (never winds up into flat rings over time)
          float spiral1 = angle - uTime * 0.34 + 3.6 / max(r, 0.8);
          float spiral2 = angle - uTime * 0.56 - 2.2 / max(r, 0.8);

          // Domain-warped organic plasma turbulence (lightweight 3-octave FBM + 1-octave fine wisps)
          float macroWarp = fbm3Fast(vec3(cos(spiral1) * (1.6 + r * 0.35), sin(spiral1) * (1.6 + r * 0.35), r * 1.8 - uTime * 0.16));
          float midSwirl = fbm3Fast(vec3(cos(spiral2 + macroWarp * 2.4) * (2.6 + r * 0.55), sin(spiral2 + macroWarp * 2.4) * (2.6 + r * 0.55), r * 4.2 + macroWarp * 1.6));
          float fineWisps = noise3D(vec3(cos(spiral1 * 2.0 + midSwirl * 2.0) * 3.8, sin(spiral1 * 2.0 + midSwirl * 2.0) * 3.8, r * 9.5 - uTime * 0.25));

          // Continuous rippling gas waves inside the disk
          float gasRipple = 0.5 + 0.5 * sin(r * 3.5 - uTime * 1.35 + macroWarp * 4.2);

          // Warp radial coordinate organically so edges dissolve like smoky gas
          float rWarped = r + (macroWarp - 0.5) * 0.65 + (midSwirl - 0.5) * 0.25;
          float t = clamp((rWarped - 1.14) / (6.2 - 1.14), 0.0, 1.0);
          float tRaw = clamp((r - 1.14) / (6.2 - 1.14), 0.0, 1.0);

          float innerEdge = smoothstep(0.0, 0.045, tRaw);
          float outerFade = pow(1.0 - smoothstep(0.16, 0.96, t), 2.15) * (1.0 - smoothstep(0.75, 1.0, tRaw));

          float strands = smoothstep(0.16, 0.84, mix(midSwirl, fineWisps, 0.52));
          float cloudDensity = mix(0.22, 1.0, strands) * (0.42 + 0.58 * smoothstep(0.18, 0.82, macroWarp)) * (0.72 + 0.42 * gasRipple);

          // Soft incandescent inner ISCO glow
          float iscoSpike = exp(-pow((tRaw - 0.035) * 16.0, 2.0)) * 1.05;
          float innerGlow = exp(-t * 4.2) * 0.50;

          // Relativistic Doppler beaming relative to black hole center
          vec3 toCam = normalize(cameraPosition - vWorldPos);
          float doppler = dot(normalize(vWorldVelDir), toCam);
          float beaming = pow(clamp(1.0 + 0.36 * doppler, 0.54, 1.45), 1.4);

          // Rich thermal gradient: white-gold -> fiery amber -> warm copper -> smoky ember
          vec3 hotCore = vec3(1.0, 0.96, 0.88);
          vec3 fieryAmber = vec3(1.0, 0.65, 0.24);
          vec3 warmCopper = vec3(0.82, 0.36, 0.14);
          vec3 smokyEmber = vec3(0.32, 0.10, 0.06);
          vec3 diskCol = mix(hotCore, fieryAmber, smoothstep(0.03, 0.28, t));
          diskCol = mix(diskCol, warmCopper, smoothstep(0.26, 0.60, t));
          diskCol = mix(diskCol, smokyEmber, smoothstep(0.58, 0.94, t));
          diskCol = mix(diskCol, vec3(0.88, 0.94, 1.0), clamp(doppler, 0.0, 1.0) * 0.18);

          float alpha = (cloudDensity * 0.92 + iscoSpike + innerGlow) * innerEdge * outerFade * beaming * uBlackHole;
          gl_FragColor = vec4(diskCol * (0.92 + 0.38 * beaming), clamp(alpha, 0.0, 0.95));
        }
      `,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const mainDisk = new THREE.Mesh(diskGeo, diskMat);
    mainDisk.rotation.x = -Math.PI / 2;
    sunBhRoot.add(mainDisk);

    const lensedHaloGeo = new THREE.RingGeometry(1.13, 3.4, 112, 16);
    const lensedHaloMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uBlackHole: { value: 0.0 },
        uEdgeViewStrength: { value: 1.0 },
      },
      vertexShader: `
        varying vec3 vLocalPos;
        void main() {
          vLocalPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vLocalPos;
        uniform float uTime;
        uniform float uBlackHole;
        uniform float uEdgeViewStrength;
        ${GLSL_NOISE_3D}

        void main() {
          if (uBlackHole < 0.01) discard;
          float r = length(vLocalPos.xy);
          float angle = atan(vLocalPos.y, vLocalPos.x);
          float sinAbs = abs(sin(angle));

          // Organic swirling plasma wisps for the lensed arch (lightweight 3-octave + 1-octave)
          float flowAngle = angle - uTime * 0.45;
          float macroFlow = fbm3Fast(vec3(cos(flowAngle) * 2.2, sin(flowAngle) * 2.2, r * 2.4 - uTime * 0.18));
          float fineWisps = noise3D(vec3(cos(flowAngle + macroFlow * 1.8) * 3.4, sin(flowAngle + macroFlow * 1.8) * 3.4, r * 9.5 - uTime * 0.28));

          // Trumpet-like gravitational lensing flare with organic warped outer edge
          float flare = exp(-sinAbs * 3.8) * 1.42;
          float outerR = 1.88 + flare + (macroFlow - 0.5) * 0.24;
          float t = clamp((r - 1.14) / (outerR - 1.14), 0.0, 1.0);

          float innerEdge = smoothstep(0.0, 0.045, t);
          float outerFade = pow(1.0 - smoothstep(0.24, 0.98, t), 1.95);

          // Soft photon ring hugging the black hole shadow
          float photonRing = exp(-pow((r - 1.16) * 22.0, 2.0)) * 0.85;

          float strands = smoothstep(0.18, 0.84, mix(macroFlow, fineWisps, 0.58));

          // Same-side Doppler beaming (left approaching = brighter, right receding = softer)
          float dopplerSide = clamp(1.0 - 0.30 * cos(angle), 0.54, 1.35);

          vec3 hotCore = vec3(1.0, 0.96, 0.88);
          vec3 fieryAmber = vec3(1.0, 0.65, 0.24);
          vec3 warmCopper = vec3(0.82, 0.36, 0.14);
          vec3 col = mix(hotCore, fieryAmber, smoothstep(0.04, 0.42, t));
          col = mix(col, warmCopper, smoothstep(0.40, 0.92, t));

          float archBody = mix(0.24, 1.0, strands) * innerEdge * outerFade * (0.42 + 0.58 * sinAbs + 0.35 * exp(-sinAbs * 4.2));
          float alpha = (photonRing + archBody * uEdgeViewStrength * 0.90) * dopplerSide * uBlackHole;

          gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.94));
        }
      `,
      side: THREE.DoubleSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const lensedHaloMesh = new THREE.Mesh(lensedHaloGeo, lensedHaloMat);
    sunBhRoot.add(lensedHaloMesh);

    // Subtle cosmic dust swarm for Black Hole & Sun corona sparkle
    const particleCount = 800;
    const pRadius = new Float32Array(particleCount);
    const pAngle = new Float32Array(particleCount);
    const pYOffset = new Float32Array(particleCount);
    const pSpeed = new Float32Array(particleCount);
    const pSize = new Float32Array(particleCount);
    const pDummyPos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 1.6 + Math.pow(Math.random(), 1.4) * 3.8;
      pRadius[i] = r;
      pAngle[i] = Math.random() * Math.PI * 2;
      pYOffset[i] = (Math.random() - 0.5) * (0.14 + (r - 1.5) * 0.05);
      pSpeed[i] = 0.32 / Math.pow(r, 1.15);
      pSize[i] = 1.0 + Math.random() * 1.8;
      pDummyPos[i * 3] = r * Math.cos(pAngle[i]);
      pDummyPos[i * 3 + 1] = pYOffset[i];
      pDummyPos[i * 3 + 2] = r * Math.sin(pAngle[i]);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pDummyPos, 3));
    particleGeo.setAttribute('aRadius', new THREE.BufferAttribute(pRadius, 1));
    particleGeo.setAttribute('aAngle', new THREE.BufferAttribute(pAngle, 1));
    particleGeo.setAttribute('aYOffset', new THREE.BufferAttribute(pYOffset, 1));
    particleGeo.setAttribute('aSpeed', new THREE.BufferAttribute(pSpeed, 1));
    particleGeo.setAttribute('aSize', new THREE.BufferAttribute(pSize, 1));

    const particleMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio || 1, 1.25) },
        uBlackHole: { value: 0.0 },
        uSun: { value: 0.0 },
      },
      vertexShader: `
        attribute float aRadius;
        attribute float aAngle;
        attribute float aYOffset;
        attribute float aSpeed;
        attribute float aSize;
        varying float vHeat;
        uniform float uTime;
        uniform float uPixelRatio;

        void main() {
          float theta = aAngle + uTime * aSpeed;
          float waveY = sin(aRadius * 3.6 - uTime * 1.35) * 0.065 + sin(theta * 3.0 - uTime * 0.65 + aRadius * 2.2) * 0.05;
          vec3 pos = vec3(
            aRadius * cos(theta),
            aYOffset + waveY,
            aRadius * sin(theta)
          );
          vHeat = 1.0 - clamp((aRadius - 1.6) / 3.8, 0.0, 1.0);
          vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPos;
          gl_PointSize = aSize * uPixelRatio * (16.0 / -mvPos.z);
        }
      `,
      fragmentShader: `
        varying float vHeat;
        uniform float uBlackHole;
        uniform float uSun;

        void main() {
          float vis = max(uBlackHole, uSun * 0.35);
          if (vis < 0.02) discard;
          vec2 uv = gl_PointCoord - vec2(0.5);
          float d = length(uv);
          if (d > 0.5) discard;
          float soft = pow(1.0 - d * 2.0, 2.0);
          vec3 col = mix(vec3(0.95, 0.42, 0.14), vec3(1.0, 0.92, 0.72), vHeat);
          gl_FragColor = vec4(col, soft * 0.65 * vis);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particlePoints = new THREE.Points(particleGeo, particleMat);
    sunBhRoot.add(particlePoints);

    // ------------------------------------------------------------------
    // 6. RESIZE, VISIBILITY & CALM 60FPS MORPH LOOP
    // ------------------------------------------------------------------
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = Math.max(entry.contentRect.width, 1);
        const h = Math.max(entry.contentRect.height, 1);
        state.viewW = w;
        state.viewH = h;
        state.lastShiftPx = -9999;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      }
    });
    resizeObserver.observe(container);

    let isInView = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        isInView = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    let rafId = 0;
    let lastNow = performance.now();
    const camDirVec = new THREE.Vector3();
    const horizonNormVec = new THREE.Vector3();
    const targetCamPos = new THREE.Vector3(0.55, 4.05, 7.6);
    const targetLookAt = new THREE.Vector3().copy(earthTarget);
    const lookOffsetVec = new THREE.Vector3();
    const yAxis = new THREE.Vector3(0, 1, 0);

    // Calm framing camera positions per cosmic evolution stage
    // Perpendicular layout: Earth at (0, -0.1, 0), Camera at (0, 0.95, 6.5) facing Earth (-Z), Sun at (+6.5, 0.85, 6.5) on the RIGHT (+X)
    const camHero = new THREE.Vector3(0.55, 4.05, 7.6);
    const camSpacetime = new THREE.Vector3(0.25, 7.45, 3.35);
    const camEarth = new THREE.Vector3(0, 0.95, 6.5);
    const camSun = camEarth.clone();
    const camBlackHole = new THREE.Vector3(4.5, 1.50, 7.0).add(sunPos);
    const camBlackHoleBridge = new THREE.Vector3(2.45, 2.75, 4.85).add(sunPos);

    const dirToEarth = earthTarget.clone().sub(camEarth);
    const dirToSun = sunPos.clone().sub(camEarth);
    const bhTarget = sunPos.clone().add(new THREE.Vector3(0, -0.1, 0));

    const sunCamOffset = camSun.clone().sub(sunPos);
    const bhCamOffset = camBlackHole.clone().sub(sunPos);
    const sunToBhStartAng = Math.atan2(sunCamOffset.x, sunCamOffset.z);
    const sunToBhEndAng = Math.atan2(bhCamOffset.x, bhCamOffset.z);
    const sunToBhStartR = Math.hypot(sunCamOffset.x, sunCamOffset.z);
    const sunToBhEndR = Math.hypot(bhCamOffset.x, bhCamOffset.z);

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);

      const dt = Math.min((now - lastNow) / 1000, 0.05);
      lastNow = now;

      const sp = extScrollProgressRef.current?.current ?? 0;
      if (!isInView || document.hidden || sp > 1.48) return;

      // Strictly calm constant-time progression (ZERO scroll velocity multiplier!)
      if (!prefersReducedMotion) {
        state.time += dt;
        coreMesh.rotation.y += dt * 0.14;
        sunBhCoreMesh.rotation.y += dt * 0.08;
      }

      // Compute 4 Stage Weights + Hero Core Size synchronized 1-to-1 with V2HomeDemoClient GSAP acts:
      // Hero [0..0.17] -> Act01 (Spacetime) -> Act02 (Earth A) -> Act03 (Rotate 180 deg at midpoint M to Sun B) -> Act04 (BlackHole at B)
      const targetHero = 1.0 - THREE.MathUtils.smoothstep(sp, 0.04, 0.17);
      const targetBridge = THREE.MathUtils.smoothstep(sp, 0.90, 1.32);
      const rawOrbitEarthToSun = THREE.MathUtils.smoothstep(sp, 0.48, 0.60);
      state.orbitEarthToSunP += (rawOrbitEarthToSun - state.orbitEarthToSunP) * 0.12;
      const isOrbitingEarthToSun =
        sp >= 0.38 &&
        sp < 0.62 &&
        state.orbitEarthToSunP > 0.005 &&
        state.orbitEarthToSunP < 0.995;

      let targetSt = 0;
      let targetEarth = 0;
      let targetSun = 0;
      let targetBh = 0;

      if (sp < 0.38) {
        const pHeroToSt = THREE.MathUtils.smoothstep(sp, 0.04, 0.17);
        const pEarth = THREE.MathUtils.smoothstep(sp, 0.29, 0.38);
        targetSt = 1.0 - pEarth;
        targetEarth = pEarth;
        targetSun = pEarth;
        targetCamPos.lerpVectors(camHero, camSpacetime, pHeroToSt);
        if (pEarth > 0) {
          targetCamPos.lerp(camEarth, pEarth);
        }
        targetLookAt.copy(earthTarget);
      } else if (sp < 0.60) {
        const p = state.orbitEarthToSunP;
        targetEarth = 1.0 - THREE.MathUtils.smoothstep(p, 0.72, 0.98);
        targetSun = 1.0;

        // Camera stays at camEarth and pans 90 deg to the right so the Sun enters from the right
        targetCamPos.copy(camEarth);
        lookOffsetVec.copy(dirToEarth).applyAxisAngle(yAxis, -Math.PI * 0.5 * p);
        lookOffsetVec.y = THREE.MathUtils.lerp(dirToEarth.y, dirToSun.y, p);
        targetLookAt.copy(camEarth).add(lookOffsetVec);
      } else if (sp < 0.82) {
        const p = THREE.MathUtils.smoothstep(sp, 0.72, 0.82);
        targetSun = 1.0 - p;
        targetBh = p;
        const arcAng = THREE.MathUtils.lerp(sunToBhStartAng, sunToBhEndAng, p);
        const arcR = THREE.MathUtils.lerp(sunToBhStartR, sunToBhEndR, p) + Math.sin(p * Math.PI) * 0.8;
        const arcY = THREE.MathUtils.lerp(camSun.y, camBlackHole.y, p);
        targetCamPos.set(
          sunPos.x + Math.sin(arcAng) * arcR,
          arcY,
          sunPos.z + Math.cos(arcAng) * arcR
        );
        targetLookAt.lerpVectors(sunPos, bhTarget, p);
      } else {
        targetBh = 1.0;
        targetCamPos.lerpVectors(camBlackHole, camBlackHoleBridge, targetBridge);
        targetLookAt.copy(bhTarget);
      }

      state.wHero += (targetHero - state.wHero) * 0.085;
      state.wSpacetime += (targetSt - state.wSpacetime) * 0.085;
      state.wEarth += (targetEarth - state.wEarth) * 0.085;
      state.wSun += (targetSun - state.wSun) * 0.085;
      state.wBlackHole += (targetBh - state.wBlackHole) * 0.085;
      state.wBridge += (targetBridge - state.wBridge) * 0.085;

      // Off-axis lens shift so pure 3D body occupies right half alongside Hero/Scrollytelling left panel
      const targetShiftRatio = state.viewW >= 1024 ? 0.205 : 0;
      const targetShiftPx = Math.round(state.viewW * targetShiftRatio);
      if (Math.abs(targetShiftPx - state.lastShiftPx) >= 1) {
        state.lastShiftPx = targetShiftPx;
        if (targetShiftPx > 0) {
          camera.setViewOffset(
            state.viewW,
            state.viewH,
            -targetShiftPx,
            0,
            state.viewW,
            state.viewH
          );
        } else {
          camera.clearViewOffset();
        }
        camera.updateProjectionMatrix();
      }

      // Smooth calm camera flight (or obey gentle drag if user is interacting at top)
      if (!userInteracting) {
        if (sp > 0.03) {
          camera.position.lerp(targetCamPos, isOrbitingEarthToSun ? 0.35 : 0.065);
        } else {
          camera.position.lerp(camHero, 0.04);
          if (!prefersReducedMotion) {
            camera.position.applyAxisAngle(yAxis, dt * 0.032);
          }
        }
        controls.target.lerp(targetLookAt, isOrbitingEarthToSun ? 0.22 : 0.08);
      }

      // Keep original 0.85 core size on Hero ("trang đầu"), then shrink to 0.30 in Stage 01 (Giếng Không–Thời gian)
      const spacetimeCoreScale = THREE.MathUtils.lerp(0.30, 0.85, state.wHero);
      const earthCoreScale = state.wSpacetime * spacetimeCoreScale + state.wEarth * 1.12;
      coreGroup.scale.setScalar(Math.max(0.25, earthCoreScale));
      coreGroup.visible = state.wSpacetime > 0.015 || state.wEarth > 0.015;

      const sunBhCoreScale =
        state.wSun * 1.28 + state.wBlackHole * (0.92 + state.wBridge * 0.16);
      sunBhCoreGroup.scale.setScalar(Math.max(0.25, sunBhCoreScale));
      sunBhRoot.visible = state.wSun > 0.015 || state.wBlackHole > 0.015;

      // Dramatic diagonal tilt for Gargantua silhouette + Kinetic Bridge lift
      sunBhRoot.rotation.z = state.wBlackHole * 0.24 + state.wBridge * 0.10;
      sunBhRoot.rotation.x = state.wBridge * 0.08;
      sunBhRoot.position.y = sunPos.y + state.wBridge * 0.18;

      // Gentle axial tilt for Earth
      coreMesh.rotation.z = THREE.MathUtils.degToRad(23.4) * state.wEarth;

      // Update uniforms
      coreUniforms.uTime.value = state.time;
      coreUniforms.uSpacetime.value = state.wSpacetime;
      coreUniforms.uEarth.value = state.wEarth;
      coreUniforms.uSun.value = 0.0;
      coreUniforms.uBlackHole.value = 0.0;

      sunBhCoreUniforms.uTime.value = state.time;
      sunBhCoreUniforms.uSun.value = state.wSun;
      sunBhCoreUniforms.uBlackHole.value = state.wBlackHole;

      cloudUniforms.uTime.value = state.time;
      cloudUniforms.uEarth.value = state.wEarth;
      earthCloudMesh.visible = state.wEarth > 0.015;

      earthAtmoUniforms.uEarth.value = state.wEarth;
      earthAtmoMesh.visible = state.wEarth > 0.015;

      sunProminenceUniforms.uTime.value = state.time;
      sunProminenceUniforms.uSun.value = state.wSun;
      sunProminenceMesh.visible = state.wSun > 0.015;

      sunCoronaBillboardUniforms.uTime.value = state.time;
      sunCoronaBillboardUniforms.uSun.value = state.wSun;
      sunCoronaBillboard.visible = state.wSun > 0.015;
      if (sunCoronaBillboard.visible) {
        sunCoronaBillboard.quaternion.copy(camera.quaternion);
      }

      coronaUniforms.uTime.value = state.time;
      coronaUniforms.uSpacetime.value = state.wSpacetime;
      coronaUniforms.uEarth.value = state.wEarth;
      coronaUniforms.uSun.value = 0.0;
      coronaUniforms.uBlackHole.value = 0.0;

      bhCoronaUniforms.uBlackHole.value = state.wBlackHole;
      bhCoronaMesh.visible = state.wBlackHole > 0.015;

      // Gravity grid strongest at Hero + Stage 1 (Spacetime) and faint underlay under Stage 4 (Black Hole)
      const targetGridParent = state.wBlackHole > 0.015 ? sunBhRoot : cosmicRoot;
      if (gravityGrid.parent !== targetGridParent) {
        targetGridParent.add(gravityGrid);
      }
      gridUniforms.uTime.value = state.time;
      gridUniforms.uGridOpacity.value = state.wSpacetime * 0.96 + state.wBlackHole * 0.16;
      gravityGrid.visible = gridUniforms.uGridOpacity.value > 0.015;

      // Orbiting Moon / geodesic test body + inclined orbital trajectory ring
      const moonVis = Math.max(state.wSpacetime, state.wEarth);
      moonMesh.visible = moonVis > 0.04;
      moonUniforms.uSpacetime.value = state.wSpacetime;
      moonUniforms.uEarth.value = state.wEarth;
      if (moonMesh.visible) {
        const orbR = THREE.MathUtils.lerp(2.75, 1.98, state.wEarth);
        const orbAng = state.time * 0.36 + 0.65;
        const orbWellY = -2.45 / Math.pow(orbR * orbR + 0.72, 0.62) - 0.25;
        moonMesh.position.set(
          orbR * Math.cos(orbAng),
          THREE.MathUtils.lerp(orbWellY, 0.36 * Math.sin(orbAng) - 0.10 * Math.cos(orbAng), state.wEarth),
          orbR * Math.sin(orbAng)
        );
        moonMesh.rotation.y = -orbAng + Math.PI * 0.5;
        moonMesh.scale.setScalar(moonVis * THREE.MathUtils.lerp(0.6, 1.0, state.wEarth));
      }

      moonOrbitMat.opacity = state.wEarth * 0.20;
      moonOrbitLine.visible = state.wEarth > 0.04;

      // Accretion Disk & Lensed Halo (Stage 4: Black Hole)
      diskUniforms.uTime.value = state.time;
      diskUniforms.uBlackHole.value = state.wBlackHole;
      mainDisk.scale.setScalar(Math.max(0.55, sunBhCoreScale));
      mainDisk.visible = state.wBlackHole > 0.015;

      sunBhRoot.worldToLocal(camDirVec.copy(camera.position));
      camDirVec.y = 0;
      camDirVec.normalize();
      lensedHaloMesh.rotation.y = Math.atan2(camDirVec.x, camDirVec.z);
      lensedHaloMesh.scale.setScalar(Math.max(0.55, sunBhCoreScale));
      horizonNormVec.copy(camera.position).sub(sunBhRoot.position).normalize();
      lensedHaloMat.uniforms.uTime.value = state.time;
      lensedHaloMat.uniforms.uBlackHole.value = state.wBlackHole;
      lensedHaloMat.uniforms.uEdgeViewStrength.value = THREE.MathUtils.clamp(
        (1.0 - Math.abs(horizonNormVec.y)) * 1.45,
        0.1,
        1.0
      );
      lensedHaloMesh.visible = state.wBlackHole > 0.015;

      particleMat.uniforms.uTime.value = state.time;
      particleMat.uniforms.uBlackHole.value = state.wBlackHole;
      particleMat.uniforms.uSun.value = state.wSun;

      if (!prefersReducedMotion) {
        starPoints.rotation.y += dt * 0.008;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    let disposed = false;
    let warmupTimerId: ReturnType<typeof setTimeout> | null = null;
    if ((extScrollProgressRef.current?.current ?? 0) > 1.48) {
      // Defer shader warm-up compile when landing directly below the 3D hero (e.g. returning to #curriculum-app)
      warmupTimerId = setTimeout(() => {
        if (!disposed) {
          try {
            renderer.compile(scene, camera);
          } catch {
            // Ignore compile errors during teardown
          }
        }
      }, 180);
    }

    rafId = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      if (warmupTimerId !== null) clearTimeout(warmupTimerId);
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      controls.removeEventListener('start', onControlStart);
      controls.removeEventListener('end', onControlEnd);
      controls.dispose();

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points || obj instanceof THREE.Line) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing outline-none"
        aria-label="Mô phỏng tiến hóa Vật lý Thiên văn 3D: Giếng Không-Thời gian, Trái Đất, Mặt Trời và Hố Đen"
      />
    </div>
  );
}
