import { NextPage } from 'next';

import Donut from 'src/components/Donut';

import { Canvas } from 'react-three-fiber';

const DonutPage: NextPage = () => (
  <>
    <Canvas style={{ height: '70vh', width: '100%' }}>
      <pointLight position={[10, 10, 10]} />
      <Donut position={[0, 0, 0]} />
    </Canvas>
  </>
);

export default DonutPage;
