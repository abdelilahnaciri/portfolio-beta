import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const cup = useGLTF("./fullModel.glb");
  console.log(cup);
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
      {/* <OrbitControls makeDefault /> */}

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tensin: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={"https://bruno-simon.com/html/"} />
            </Html>
          </primitive>
          <primitive
            object={cup.scene}
            position={[2.2, -0.75, 0]}
            scale={[0.4, 0.4, 0.4]}
          />
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
      {/* <primitive
        object={computer.scene}
        position={[-1, -1.5, 0]}
        scale={[3.5, 3.5, 3.5]}
      /> */}
      {/* <primitive object={cup.scene} position={[6, 0, 0]} /> */}
    </>
  );
}
