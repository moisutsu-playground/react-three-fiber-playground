import { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh } from "three";

const MovingCircleCube: React.FCX = (props: MeshProps) => {
  const mesh = useRef<Mesh>();

  const [hovered, setHover] = useState(false);

  useFrame(({ clock }) => {
    if (typeof mesh.current !== "undefined") {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
      mesh.current.position.x = Math.cos(clock.getElapsedTime() * 2) * 2;
      mesh.current.position.y = Math.sin(clock.getElapsedTime() * 2) * 2;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.5, 0.5, 0.5]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
};

export default MovingCircleCube;
