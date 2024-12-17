import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
`;

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Atom />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We develop products with a strong focus on both world class and ensuring
        your product is a market success.
      </Desc>
    </>
  );
};

export default Development;
