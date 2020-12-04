import { NextPage } from "next";

import MovingCube from "src/components/MovingCube";

import { Canvas } from "react-three-fiber";

const MovingCubePage: NextPage = () => (
  <>
    <Canvas style={{ height: "70vh", width: "100%" }}>
      <pointLight position={[10, 10, 10]} />
      <MovingCube position={[-7, 0, 0]} />
      <MovingCube position={[-5, -1, 0]} />
      <MovingCube position={[-1, 1, 0]} />
    </Canvas>
  </>
);

export default MovingCubePage;
