import { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

const Donut: React.FCX = (props: MeshProps) => {
  const mesh = useRef<Mesh>();

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.2, 0.2, 0.2]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <torusBufferGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} />
    </mesh>
  );
};

export default Donut;
