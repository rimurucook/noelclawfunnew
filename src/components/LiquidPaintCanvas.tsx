import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
uniform float u_time;
uniform float u_streamIntensity;
uniform float u_flowSpeed;
varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_normal;
varying float v_flowStrength;

float hash(float n) { return fract(sin(n) * 43758.5453123); }

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289v2(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289v2(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float fbm(vec2 p, float t) {
  float val = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for(int i = 0; i < 3; i++) {
    val += amp * snoise(p * freq + t * 0.3);
    freq *= 2.1;
    amp *= 0.5;
  }
  return val;
}

float warpedNoise(vec2 p, float t) {
  vec2 q = vec2(fbm(p + vec2(0.0, 0.0), t), fbm(p + vec2(5.2, 1.3), t));
  vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, 9.2), t * 1.2), fbm(p + 4.0 * q + vec2(8.3, 2.8), t * 1.2));
  return fbm(p + 3.5 * r, t * 0.8);
}

void getStreamSurface(vec2 uv, float t, out vec3 worldPos, out vec3 normal) {
  float scaledTime = t * u_flowSpeed;
  vec2 tiltedUV = vec2(uv.x * 0.6 + uv.y * 0.25, uv.y);
  float n1 = warpedNoise(tiltedUV * 1.8 + vec2(scaledTime * 0.4, scaledTime * 0.15), scaledTime * 0.5);
  float height = n1 * 0.45;
  float n2 = warpedNoise(tiltedUV * 3.5 + vec2(-scaledTime * 0.3, scaledTime * 0.25), scaledTime * 0.4);
  height += n2 * 0.2;
  float fine = snoise(tiltedUV * 8.0 + vec2(scaledTime * 0.2, -scaledTime * 0.1)) * 0.06;
  height += fine;
  worldPos = vec3(uv.x, height * u_streamIntensity, uv.y);
  float eps = 0.01;
  vec2 tuvL = tiltedUV + vec2(-eps, 0.0);
  vec2 tuvR = tiltedUV + vec2(eps, 0.0);
  vec2 tuvD = tiltedUV + vec2(0.0, -eps);
  vec2 tuvU = tiltedUV + vec2(0.0, eps);
  float n1L = warpedNoise(tuvL * 1.8 + vec2(scaledTime * 0.4, scaledTime * 0.15), scaledTime * 0.5);
  float n2L = warpedNoise(tuvL * 3.5 + vec2(-scaledTime * 0.3, scaledTime * 0.25), scaledTime * 0.4);
  float fineL = snoise(tuvL * 8.0 + vec2(scaledTime * 0.2, -scaledTime * 0.1)) * 0.06;
  float hL = (n1L * 0.45 + n2L * 0.2 + fineL) * u_streamIntensity;
  float n1R = warpedNoise(tuvR * 1.8 + vec2(scaledTime * 0.4, scaledTime * 0.15), scaledTime * 0.5);
  float n2R = warpedNoise(tuvR * 3.5 + vec2(-scaledTime * 0.3, scaledTime * 0.25), scaledTime * 0.4);
  float fineR = snoise(tuvR * 8.0 + vec2(scaledTime * 0.2, -scaledTime * 0.1)) * 0.06;
  float hR = (n1R * 0.45 + n2R * 0.2 + fineR) * u_streamIntensity;
  float n1D = warpedNoise(tuvD * 1.8 + vec2(scaledTime * 0.4, scaledTime * 0.15), scaledTime * 0.5);
  float n2D = warpedNoise(tuvD * 3.5 + vec2(-scaledTime * 0.3, scaledTime * 0.25), scaledTime * 0.4);
  float fineD = snoise(tuvD * 8.0 + vec2(scaledTime * 0.2, -scaledTime * 0.1)) * 0.06;
  float hD = (n1D * 0.45 + n2D * 0.2 + fineD) * u_streamIntensity;
  float n1U = warpedNoise(tuvU * 1.8 + vec2(scaledTime * 0.4, scaledTime * 0.15), scaledTime * 0.5);
  float n2U = warpedNoise(tuvU * 3.5 + vec2(-scaledTime * 0.3, scaledTime * 0.25), scaledTime * 0.4);
  float fineU = snoise(tuvU * 8.0 + vec2(scaledTime * 0.2, -scaledTime * 0.1)) * 0.06;
  float hU = (n1U * 0.45 + n2U * 0.2 + fineU) * u_streamIntensity;
  normal = normalize(vec3(hL - hR, 2.0 * eps, hD - hU));
}

void main() {
  v_uv = uv;
  float t = u_time;
  getStreamSurface(uv, t, v_worldPos, v_normal);
  v_flowStrength = clamp(abs(v_worldPos.y) * 2.0, 0.0, 1.0);
  vec3 displaced = v_worldPos;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}
`

const fragmentShader = `
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_streamIntensity;
uniform float u_colorShift;
uniform float u_flowSpeed;
uniform vec3 u_lightPosition;
uniform vec2 u_mouse;
uniform float u_mouseActive;
varying vec2 v_uv;
varying vec3 v_worldPos;
varying vec3 v_normal;
varying float v_flowStrength;

float hash(float n) { return fract(sin(n) * 43758.5453123); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash2(i), hash2(i + vec2(1.0, 0.0)), u.x), mix(hash2(i + vec2(0.0, 1.0)), hash2(i + vec2(1.0, 1.0)), u.x), u.y);
}

vec3 metallicGold(vec3 pos, float flowStrength) {
  vec3 baseDark = vec3(0.02, 0.012, 0.005);
  vec3 baseMid = vec3(0.15, 0.12, 0.08);
  vec3 baseLight = vec3(0.8, 0.65, 0.35);
  vec3 highlight = vec3(1.0, 0.92, 0.72);
  float n = noise(pos.xz * 4.0 + u_time * 0.2);
  float n2 = noise(pos.xz * 12.0 - u_time * 0.15);
  float blend = smoothstep(0.2, 0.6, n + flowStrength * 0.3);
  vec3 color = mix(baseDark, baseMid, blend);
  float blend2 = smoothstep(0.4, 0.8, n2 + flowStrength * 0.2);
  color = mix(color, baseLight, blend2 * 0.4);
  float sheen = noise(pos.xz * 20.0 + vec2(u_time * 0.3, -u_time * 0.1));
  sheen = smoothstep(0.55, 0.9, sheen);
  color = mix(color, highlight, sheen * 0.5 * flowStrength);
  float hotSpot = noise(pos.xz * 6.0 + u_time * 0.4);
  hotSpot = smoothstep(0.7, 1.0, hotSpot) * 0.3;
  color += vec3(0.4, 0.25, 0.08) * hotSpot * flowStrength;
  return color;
}

vec3 thinFilmIridescence(float cosTheta, float thickness) {
  float phase = thickness * cosTheta * 6.28318;
  return 0.5 + 0.5 * cos(phase + vec3(0.0, 2.09, 4.18));
}

void main() {
  float t = u_time;
  vec3 N = normalize(v_normal);
  vec3 worldPos = v_worldPos;
  vec3 lightPos = u_lightPosition;
  vec3 toLight = lightPos - worldPos;
  float lightDist = length(toLight);
  vec3 L = normalize(toLight);
  vec3 V = normalize(vec3(0.0, 0.8, 1.4) - worldPos);
  vec3 H = normalize(L + V);
  float NdotL = max(dot(N, L), 0.0);
  float NdotH = max(dot(N, H), 0.0);
  float NdotV = max(dot(N, V), 0.0);

  vec3 metallic = metallicGold(worldPos, v_flowStrength);
  vec3 film = thinFilmIridescence(NdotV, 2.5 + sin(t * 0.2) * 0.5);
  metallic += film * 0.08 * v_flowStrength;
  vec2 uvShift = v_uv + vec2(sin(t * 0.3) * 0.02, cos(t * 0.25) * 0.015);
  float colorShiftNoise = noise(uvShift * 3.0 + t * 0.1);
  metallic.r += colorShiftNoise * 0.04 * u_colorShift;
  metallic.b -= colorShiftNoise * 0.03 * u_colorShift;

  float roughness = 0.15 + (1.0 - v_flowStrength) * 0.25;
  float alpha = roughness * roughness;
  float alpha2 = alpha * alpha;
  float d = (NdotH * NdotH) * (alpha2 - 1.0) + 1.0;
  float D = alpha2 / (3.14159 * d * d);
  float G = 1.0;
  vec3 F0 = vec3(0.8, 0.7, 0.5);
  vec3 F = F0 + (1.0 - F0) * pow(1.0 - NdotV, 5.0);
  vec3 specular = D * G * F * NdotL;

  vec3 kS = F;
  vec3 kD = (vec3(1.0) - kS) * (1.0 - 0.95);
  vec3 diffuse = metallic * kD * NdotL;

  vec3 ambientUp = vec3(0.04, 0.04, 0.05);
  vec3 ambientBounce = vec3(0.03, 0.025, 0.02);
  vec3 ambient = metallic * (ambientUp * (N.y * 0.5 + 0.5) + ambientBounce);

  vec3 lightColor = vec3(1.0, 0.97, 0.92);
  float attenuation = 1.0 / (1.0 + 0.2 * lightDist + 0.05 * lightDist * lightDist);
  vec3 lighting = ambient + (diffuse + specular * 2.5) * lightColor * attenuation;

  float thickness = smoothstep(-0.1, 0.3, worldPos.y) * 0.8 + 0.2;
  vec3 translucency = vec3(0.15, 0.1, 0.05) * thickness * v_flowStrength * 0.5;
  lighting += translucency;

  float fresnel = pow(1.0 - NdotV, 3.0);
  lighting += vec3(0.6, 0.45, 0.2) * fresnel * v_flowStrength * 0.4;

  vec3 light2Pos = vec3(0.6, 0.5, 0.4);
  vec3 toLight2 = light2Pos - worldPos;
  float light2Dist = length(toLight2);
  vec3 L2 = normalize(toLight2);
  float NdotL2 = max(dot(N, L2), 0.0);
  vec3 light2Color = vec3(1.0, 0.82, 0.45);
  float light2Atten = 1.0 / (1.0 + 0.5 * light2Dist + 0.2 * light2Dist * light2Dist);
  lighting += metallic * light2Color * NdotL2 * light2Atten * 0.6;

  if (u_mouseActive > 0.5) {
    vec3 toMouse = vec3(u_mouse.x, u_mouse.y, 0.3) - worldPos;
    float mouseDist = length(toMouse);
    float mouseAtten = 1.0 / (1.0 + 2.0 * mouseDist + 5.0 * mouseDist * mouseDist);
    lighting += vec3(1.0, 0.9, 0.7) * mouseAtten * 0.8;
    lighting += vec3(1.0, 0.95, 0.8) * pow(max(dot(N, normalize(toMouse)), 0.0), 64.0) * mouseAtten * 0.5;
  }

  vec2 filamentUV = v_uv * 15.0 + vec2(t * 0.08, t * 0.05);
  float filamentNoise = noise(filamentUV);
  float filamentNoise2 = noise(filamentUV * 2.0 + vec2(50.0));
  float filament = smoothstep(0.82, 0.92, filamentNoise) * 0.7;
  filament += smoothstep(0.88, 0.95, filamentNoise2) * 0.4;
  filament *= v_flowStrength;
  lighting += vec3(0.9, 0.8, 0.5) * filament * 0.5;

  float grain = noise(v_uv * u_resolution * 0.5 + fract(t * 0.1) * 100.0);
  lighting += (grain - 0.5) * 0.015;
  vec3 finalColor = lighting / (lighting + vec3(0.8));
  finalColor = pow(finalColor, vec3(0.95));
  gl_FragColor = vec4(finalColor, 1.0);
}
`

export default function LiquidPaintCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isLowPower = useRef(typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) < 4)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0.8, 1.4)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0
    container.appendChild(renderer.domElement)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'

    const geometry = new THREE.PlaneGeometry(3, 3, isLowPower.current ? 128 : 256, isLowPower.current ? 128 : 256)
    const uniforms = {
      u_time: { value: 0.0 },
      u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      u_streamIntensity: { value: 1.0 },
      u_colorShift: { value: 0.5 },
      u_flowSpeed: { value: 0.5 },
      u_lightPosition: { value: new THREE.Vector3(0.5, 0.8, 0.6) },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_mouseActive: { value: 0.0 },
    }
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const clock = new THREE.Clock()
    let rafId: number

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      uniforms.u_time.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }

    if (isLowPower.current) {
      let running = true
      const cappedAnimate = () => {
        if (!running) return
        setTimeout(() => {
          if (!running) return
          uniforms.u_time.value = clock.getElapsedTime()
          renderer.render(scene, camera)
          cappedAnimate()
        }, 33)
      }
      cappedAnimate()
      return () => { running = false }
    } else {
      animate()
    }

    const handleMouseMove = (e: MouseEvent) => {
      uniforms.u_mouse.value.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      )
      uniforms.u_mouseActive.value = 1.0
    }
    const handleMouseLeave = () => {
      uniforms.u_mouseActive.value = 0.0
    }

    let resizeTimeout: ReturnType<typeof setTimeout>
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight)
      }, 200)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen"
      style={{ zIndex: 0 }}
    />
  )
}
