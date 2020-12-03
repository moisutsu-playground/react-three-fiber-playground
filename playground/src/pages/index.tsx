import Link from 'next/link';
import { NextPage } from 'next';

import Layout from 'src/components/Layout';
import Cube from 'src/components/Cube';

import { Canvas } from 'react-three-fiber';

const IndexPage: NextPage = () => (
  <Layout title='react-three-fiber Playground'>
    <h1>Hello react-three-fiber Playground!</h1>
    <p>
      <Link href='/donut'>
        <a>Donut</a>
      </Link>
    </p>
    <Canvas style={{ height: '70vh', width: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[0, 0, 0]} />
    </Canvas>
  </Layout>
);

export default IndexPage;
