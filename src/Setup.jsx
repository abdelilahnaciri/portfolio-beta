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
  // const computer = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  // );
  const computer = useGLTF("./monitor.glb");
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

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}
      <PresentationControls
        global
        rotation={[0, -Math.PI * 0.4, 0]}
        polar={[-0.1, 0.1]}
        azimuth={[-0.5, 0.3]}
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
            position={[0, 1, -1.15]}
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
              position={[0.03, 0.01, 0.005]}
              rotation={[0, Math.PI * 0.5, 0]}
              occlude
              // scale={[0.46, 0.46, 0.46]}
            >
              <iframe src={"https://bruno-simon.com/html/"} />
            </Html>
          </primitive>
          <primitive
            object={cup.scene}
            position={[1, -0.8, 0.5]}
            scale={[0.25, 0.25, 0.25]}
          />
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
