import { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import { Mesh } from 'three';

const Cube: React.FCX = (props: MeshProps) => {
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
      scale={[3, 3, 3]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'red'} />
    </mesh>
  );
};

export default Cube;
