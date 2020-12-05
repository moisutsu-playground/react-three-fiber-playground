import { NextPage } from "next";

import AcceleratingSphere from "src/components/AcceleratingSphere";

import { Canvas } from "react-three-fiber";

const AcceleratingSpherePage: NextPage = () => (
  <>
    <Canvas style={{ height: "70vh", width: "100%" }}>
      <pointLight position={[10, 10, 10]} />
      <AcceleratingSphere position={[-7, -2, 0]} />
      <AcceleratingSphere position={[-6, -1.5, 0]} />
      <AcceleratingSphere position={[-5, -1, 0]} />
      <AcceleratingSphere position={[-4, -0.5, 0]} />
      <AcceleratingSphere position={[-3, 0, 0]} />
      <AcceleratingSphere position={[-2, 0.5, 0]} />
      <AcceleratingSphere position={[-1, 1, 0]} />
      <AcceleratingSphere position={[-0, 1.5, 0]} />
      <AcceleratingSphere position={[1, 2, 0]} />
    </Canvas>
  </>
);

export default AcceleratingSpherePage;
