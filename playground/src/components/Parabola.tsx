import { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh } from "three";

const Parabola: React.FCX = (props: MeshProps) => {
  const mesh = useRef<Mesh>();

  const xspeed = 0.2;
  const yspeed = useRef<number>(0.2);

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (typeof mesh.current !== "undefined") {
      mesh.current.position.x += xspeed;
      mesh.current.position.y += yspeed.current;
      yspeed.current -= 0.01;
      if (mesh.current.position.x >= 7) {
        mesh.current.position.x = -7;
        mesh.current.position.y = 0;
        yspeed.current = 0.2;
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.05, 0.05, 0.05]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereBufferGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "red"} />
    </mesh>
  );
};

export default Parabola;
