import { Canvas } from "react-three-fiber";
import Box from "./components/Box";
function App() {
  return (
    <>
      <Canvas style={{ height: 500, width: 1200 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[2, -4, 0]} />
      </Canvas>
      <div className="middle-container">
        <h1>I'm Ankit Kumar Gupta</h1>
        <artical>
          Software Engineer, I'm passionate about learing new things and getting
          upgraded.
        </artical>
      </div>
    </>
  );
}

export default App;
