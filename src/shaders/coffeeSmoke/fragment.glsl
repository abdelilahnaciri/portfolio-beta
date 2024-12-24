uniform float uTime;
uniform sampler2D uPerlinTexture;
varying vec2 vUv;

void main()
{

  // Scale and animate
  vec2 smokeUv = vUv;
  smokeUv.x *= 0.5;
  smokeUv.y *= 0.5;
  smokeUv.y -= uTime * 0.03;

  // Smoke
  float smoke = texture(uPerlinTexture, smokeUv).r;

  // Remap
  smoke = smoothstep(0.4, 1.0, smoke);

  // Final color
  gl_FragColor = vec4(1.0, 1.0, 1.0, smoke);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}