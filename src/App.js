import { Canvas, extend, useThree } from "react-three-fiber";

import Box from "./components/Box";
import Mesh from "./components/Mesh";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraControls from "./components/CameraControls";

extend({ OrbitControls });

function App() {
  return (
    <div style={{ height: 500 }}>
      {/* <Canvas style={{ height: 500, width: 1200 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[2, -4, 0]} />
      </Canvas>
      <div className="middle-container">
        <h1>I'm Ankit Kumar Gupta</h1>
        <artical>
          Software Engineer, I'm passionate about learing new things and getting
          upgrad myself.
        </artical>
      </div> */}
      {/* <mesh rotation={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial attach="material" color="blue" />
      </mesh> */}
      <Canvas>
        <CameraControls />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 15, 10]} angle={0.9} />
        <Mesh />
      </Canvas>
    </div>
  );
}

export default App;
