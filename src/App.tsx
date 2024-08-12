import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { BoxModel } from "./components/BoxModel/BoxModel";
import { BoxControls } from "./components/BoxControl/BoxControl";

function App() {
  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
    depth: 1,
  });

  const handleDimensionsChange = (
    width: number,
    height: number,
    depth: number
  ) => {
    setDimensions({ width, height, depth });
  };

  return (
    <>
      <BoxControls onDimensionsChange={handleDimensionsChange} />
      <div style={{ margin: "20px" }}>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Suspense fallback={null}>
            <BoxModel
              width={dimensions.width}
              height={dimensions.height}
              depth={dimensions.depth}
            />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
