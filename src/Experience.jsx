import { Environment, useGLTF, OrbitControls } from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  // const cup = useGLTF(
  //   "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
  // );
  // const desk = useGLTF("./desk.glb");
  // console.log(desk);
  const cup = useGLTF("./fullModel.glb");
  console.log(cup);
  let cupObj;
  // if (cup.scene.__r3f) cupObj = cup.scene.__r3f.parent.children[0];
  // console.log(cupObj);
  // console.log(cup.scene.__r3f.parent.children[0]);
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
      <color args={["#000"]} attach="background" />
      <OrbitControls makeDefault />

      <mesh>
        {/* <boxGeometry /> */}
        <meshNormalMaterial />
      </mesh>
      <primitive object={cup.scene} position={[6, 0, 0]} />
      {/* <primitive object={desk.scene} scale={[1.6, 1, 1]} /> */}
      <primitive
        object={computer.scene}
        position={[-1, -1.5, 0]}
        scale={[3.5, 3.5, 3.5]}
      />
      {/* <primitive
        object={cup.scene}
        position={[2, 0.5, 0]}
        scale={[3, 3, 3]}
        rotation={[0, Math.PI, 0]}
      /> */}
    </>
  );
}
