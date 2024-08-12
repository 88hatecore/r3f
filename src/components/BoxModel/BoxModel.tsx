import * as THREE from "three";
import { useState, useRef } from "react";
import { ThreeElements } from "@react-three/fiber";

export const BoxModel = (props: ThreeElements["mesh"]): JSX.Element => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? "hotpink" : "orange"} />
    </mesh>
  );
};
