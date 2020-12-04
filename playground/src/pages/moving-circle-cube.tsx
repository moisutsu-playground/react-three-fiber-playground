import { NextPage } from "next";

import MovingCircleCube from "src/components/MovingCircleCube";

import { Canvas } from "react-three-fiber";

const MovingCubePage: NextPage = () => (
  <>
    <Canvas style={{ height: "70vh", width: "100%" }}>
      <pointLight position={[10, 10, 10]} />
      <MovingCircleCube position={[0, 0, 0]} />
    </Canvas>
  </>
);

export default MovingCubePage;
