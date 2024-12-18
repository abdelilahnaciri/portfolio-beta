import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { memo } from "react";
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

  @media only screen and (max-width: 768px) {
    padding: 10px;
    font-size: 13px;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Atom />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <Desc>
        We develop products with a strong focus on both world class and ensuring
        your product is a market success.
      </Desc>
    </>
  );
};

export default memo(Development);
