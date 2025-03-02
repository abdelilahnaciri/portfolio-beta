import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import Setup from "./Setup.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    className="Setup"
    camera={{
      fov: 45,
      near: 0.1,
      far: 2000,
      position: [0, 1.5, 6],
    }}
    style={{ touchAction: "none" }}
  >
    {/* <Experience /> */}
    <Setup />
  </Canvas>
);
