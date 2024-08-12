import * as THREE from "three";
import { useRef } from "react";
import { ThreeElements } from "@react-three/fiber";

interface BoxModelProps {
  width: number;
  height: number;
  depth: number;
}

export const BoxModel = ({
  width,
  height,
  depth,
  ...props
}: BoxModelProps & ThreeElements["mesh"]): JSX.Element => {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[width, height, depth]}/>
    </mesh>
  );
};
