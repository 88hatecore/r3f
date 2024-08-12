import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { BoxModel } from "./components/BoxModel/BoxModel";

function App() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Suspense fallback={null}>
        <BoxModel position={[-1.2, 0, 0]} />
        <BoxModel position={[1.2, 0, 0]} />
      </Suspense>
    </Canvas>
  );
}

export default App;
