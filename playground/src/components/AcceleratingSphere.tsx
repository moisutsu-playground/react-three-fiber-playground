import { useRef, useState } from "react";
import { MeshProps, useFrame } from "react-three-fiber";
import { Mesh } from "three";

const AcceleratingSphere: React.FCX = (props: MeshProps) => {
  const mesh = useRef<Mesh>();
  const speed = useRef<number>(0);

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    if (typeof mesh.current !== "undefined") {
      mesh.current.position.x += speed.current;
      speed.current += 0.002;
      if (mesh.current.position.x >= 7 && typeof props.position !== "undefined") {
        mesh.current.position.x = -7;
        speed.current = 0;
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

export default AcceleratingSphere;
