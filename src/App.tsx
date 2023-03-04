import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as THREE from "three";
import useWindowMeasurements from "./hooks/useWindowMeasurements";
import { Canvas, useFrame } from "@react-three/fiber";
import { globalContext } from "./GlobalContext";
function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current!.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const App = () => {
  const [values, setValues] = useState({});
  return (
    <globalContext.Provider value={{ values: values, setValues: setValues }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>{" "}
    </globalContext.Provider>
  );
};

export default App;
