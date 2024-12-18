/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 chair.gltf --transform 
Files: chair.gltf [1.97MB] > C:\Users\hp\OneDrive\Bureau\chair\chair-transformed.glb [278.67KB] (86%)
Author: Francesco Coldesina (https://sketchfab.com/topfrank2013)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-b5ecdb6253a7454c916954bef6c10251
Title: Chair
*/

import React, { memo } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/chair-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["default"]}
        position={[-337.616, -444.194, 369.778]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload("/chair-transformed.glb");

export default memo(Model);
