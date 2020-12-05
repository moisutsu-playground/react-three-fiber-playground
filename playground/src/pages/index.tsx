import Link from "next/link";
import { NextPage } from "next";

import Cube from "src/components/Cube";

import { Canvas } from "react-three-fiber";

const IndexPage: NextPage = () => (
  <>
    <p>
      <Link href="/donut">
        <a>Donut</a>
      </Link>
      <Link href="/moving-cube">
        <a>MovingCube</a>
      </Link>
      <Link href="/moving-circle-cube">
        <a>MovingCircleCube</a>
      </Link>
      <Link href="/accelerating-sphere">
        <a>AcceleratingSphere</a>
      </Link>
      <Link href="/parabola">
        <a>Parabola</a>
      </Link>
    </p>
    <Canvas style={{ height: "70vh", width: "100%" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[0, 0, 0]} />
    </Canvas>
  </>
);

export default IndexPage;
