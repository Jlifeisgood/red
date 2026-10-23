// Пост-обработка: MSAA-рендер в HDR, свечение ламп, тональная компрессия, цветокоррекция, виньетка, зерно плёнки.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// Контуры тушью по разрывам глубины (лапласиан линейной глубины): рамы, двери, мебель обводятся как в комиксе.
const InkShader = {
  uniforms: { tDiffuse: { value: null }, tDepth: { value: null }, res: { value: new THREE.Vector2(1, 1) }, near: { value: 50 }, far: { value: 3000 }, k: { value: .9 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse, tDepth; uniform vec2 res; uniform float near, far, k; varying vec2 vUv;
    float lz(vec2 uv) { float d = texture2D(tDepth, uv).x; return near * far / (far - d * (far - near)); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 px = 1.25 / res;
      float z = lz(vUv);
      float lap = abs(lz(vUv + vec2(px.x, 0.)) + lz(vUv - vec2(px.x, 0.)) + lz(vUv + vec2(0., px.y)) + lz(vUv - vec2(0., px.y)) - 4. * z);
      float e = smoothstep(.0035, .012, lap / z) * step(z, far * .9);
      gl_FragColor = vec4(c.rgb * (1. - e * k), c.a);
    }`,
};

// Работает уже в sRGB после OutputPass: всё, что «плёночное», делаем здесь.
const GradeShader = {
  uniforms: {
    tDiffuse: { value: null }, time: { value: 0 }, res: { value: new THREE.Vector2(1, 1) },
    vign: { value: .62 }, grain: { value: .055 }, sat: { value: .84 }, hurt: { value: 0 }, lift: { value: new THREE.Vector3(.012, .016, .022) },
  },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float time, vign, grain, sat, hurt; uniform vec2 res; uniform vec3 lift; varying vec2 vUv;
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - .5;
      float r2 = dot(d, d), ca = .006 * r2;
      vec3 c = vec3(texture2D(tDiffuse, vUv + d * ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - d * ca).b);
      float l = dot(c, vec3(.2126, .7152, .0722));
      c = mix(vec3(l), c, sat);                                        // приглушённые цвета
      c = mix(c * vec3(.9, .97, 1.06), c * vec3(1.05, 1.0, .9), smoothstep(.15, .75, l)); // холодные тени, тёплый свет
      c = lift + c * (1.0 - lift);                                     // чуть приподнятые чёрные, как на плёнке
      c = pow(c, vec3(1.06));                                          // контраст
      float v = smoothstep(.95, .28, length(d * vec2(1.0, 1.25)));
      c *= mix(1.0 - vign, 1.0, v);
      c = mix(c, vec3(.55, .02, .02), hurt * (1.0 - v) * .85);        // красные края при ранении
      c += (h(floor(vUv * res) + fract(time) * 97.0) - .5) * grain * (.35 + l);
      gl_FragColor = vec4(c, 1.0);
    }`,
};

export function makePost(renderer, scene, camera) {
  const rt = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 });
  rt.depthTexture = new THREE.DepthTexture(4, 4); rt.depthTexture.type = THREE.UnsignedIntType;
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  const ink = new ShaderPass(InkShader);
  ink.uniforms.tDepth.value = composer.renderTarget2.depthTexture;
  composer.addPass(ink);
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .42, .45, 1.05);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);
  return {
    composer, bloom, grade, ink,
    setSize(w, h, pr) { composer.setPixelRatio(pr); composer.setSize(w, h); grade.uniforms.res.value.set(w * pr, h * pr); ink.uniforms.res.value.set(w * pr, h * pr); },
    render(t, hurt) { grade.uniforms.time.value = t; grade.uniforms.hurt.value = hurt; ink.uniforms.tDepth.value = composer.readBuffer.depthTexture || composer.renderTarget2.depthTexture; composer.render(); },
  };
}
