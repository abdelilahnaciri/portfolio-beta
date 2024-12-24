import * as THREE from "three";
import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import coffeeSmokeVertexShader from "./shaders/coffeeSmoke/vertex.glsl";
import coffeeSmokeFragmentShader from "./shaders/coffeeSmoke/fragment.glsl";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { uniforms } from "three/tsl";

export default function Experience() {
  const computer = useGLTF("./monitor.glb");
  const cup = useGLTF("./fullModel.glb");
  const keyboard = useGLTF("./keyboard-1.glb");
  // console.log(cup);

  // const textureLoader = new THREE.TextureLoader();
  // const perlinTexture = textureLoader.load("./perlin.png");
  // console.log(perlinTexture);

  // const [perlinTexture, setTexture] = useState(null);
  // console.log(perlinTexture);
  // useEffect(() => {
  //   const loader = new THREE.TextureLoader();
  //   loader.load(
  //     "./perlin.png", // Replace with your texture path
  //     (loadedTexture) => setTexture(loadedTexture), // On load
  //     undefined, // On progress
  //     (err) => console.error("Texture loading error:", err) // On error
  //   );
  // }, []);

  const smokeShaderRef = useRef();
  const textureRef = useRef();

  const textureLoader = new THREE.TextureLoader();
  useEffect(() => {
    textureLoader.load("./perlin.png", (perlinTexture) => {
      perlinTexture.wrapS = THREE.RepeatWrapping;
      perlinTexture.wrapT = THREE.RepeatWrapping;
      textureRef.current = perlinTexture;
      if (smokeShaderRef.current) {
        smokeShaderRef.current.uniforms.uPerlinTexture.value = perlinTexture; // Update the uniform
      }
    });
  }, []);

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    // Update smoke
    if (smokeShaderRef.current) {
      smokeShaderRef.current.uniforms.uTime.value = elapsedTime;
    }
  });
  console.log(uniforms);
  return (
    <>
      <Environment preset="city" />
      {/* <ambientLight /> */}
      {/* <directionalLight
        color={0xffffff} 
        intensity={1} 
        position={[5, 10, 2]} 
        castShadow 
      /> */}
      <color args={["#191919"]} attach="background" />

      <PresentationControls
        global
        rotation={[0, -Math.PI * 0.2, 0]}
        // polar={[-0.4, 0.6]}
        // azimuth={[-0.6, 1.6]}
        // config={{ mass: 2, tensin: 400 }}
        // snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 1, 0.2]}
          />
          <primitive
            object={computer.scene}
            scale={[5, 5, 5]}
            rotation={[0, -Math.PI * 0.5, 0]}
            position={[0, 0.8, 0]}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={0.2}
              position={[0.03, 0, 0]}
              rotation={[0, Math.PI * 0.5, 0]}
              // occlude
              // scale={[0.46, 0.46, 0.46]}
            >
              <iframe src={"https://bruno-simon.com/html/"} />
            </Html>
          </primitive> */}

          <primitive
            object={cup.scene}
            position={[1, -0.8, 0.4]}
            scale={[0.25, 0.25, 0.25]}
          >
            <mesh scale={[1.6, 6, 1.6]} position={[0, 5, 0]}>
              <planeGeometry args={[1, 1, 16, 64]} />
              <shaderMaterial
                ref={smokeShaderRef}
                // wireframe
                vertexShader={coffeeSmokeVertexShader}
                fragmentShader={coffeeSmokeFragmentShader}
                uniforms={{
                  uTime: new THREE.Uniform(0),
                  uPerlinTexture: new THREE.Uniform(null),
                }}
                side={THREE.DoubleSide}
                transparent
              />
            </mesh>
          </primitive>
          {/* <primitive
            object={keyboard.scene}
            position={[0, -0.75, 1.2]}
            scale={[0.05, 0.05, 0.05]}
            // rotation={[0, -Math.PI * 0.5, 0]}
          /> */}
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-0.8} opacity={0.28} scale={6} blur={2.5} />
    </>
  );
}
