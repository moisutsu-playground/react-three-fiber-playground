import { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh } from "three";

const MovingCube: React.FCX = (props: MeshProps) => {
  const mesh = useRef<Mesh>();

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (typeof mesh.current !== "undefined") {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
      mesh.current.position.x += 0.01;
      if (mesh.current.position.x >= 7 && typeof props.position !== "undefined") {
        mesh.current.position.x = -7;
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
};

export default MovingCube;
