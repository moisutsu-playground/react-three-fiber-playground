import { NextPage } from "next";

import Parabola from "src/components/Parabola";

import { Canvas } from "react-three-fiber";

const ParabolaPage: NextPage = () => (
  <>
    <Canvas style={{ height: "70vh", width: "100%" }}>
      <pointLight position={[10, 10, 10]} />
      <Parabola position={[0, 0, 0]} />
    </Canvas>
  </>
);

export default ParabolaPage;
