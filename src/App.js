import { Canvas, extend, useThree } from "react-three-fiber";

import Box from "./components/Box";
import Mesh from "./components/Mesh";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CameraControls from "./components/CameraControls";
import Skyc from "./components/Skyc";

extend({ OrbitControls });

function App() {
  return <Skyc />;
}

export default App;
