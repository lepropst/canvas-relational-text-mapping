import { useEffect, useRef, useState } from "react";

import "./App.css";

import {
  Canvas,
  createPortal,
  extend,
  useFrame,
  useThree,
} from "@react-three/fiber";

import { useFBO } from "@react-three/drei";
import { Scene, Vector3 } from "three";
import * as THREE from "three";
import { easing } from "maath";

import Menu from "./components/Menu";
import InnerCanvas from "./elements/InnerCanvas";
import Camera from "./elements/Camera";

export default function App() {
  const [dialogShown, setDialogShown] = useState(false);
  const re = useRef(null);
  
  return (
    <>
      <div className="h-screen w-screen">
        <Canvas
          // onPointerMissed={handleMenuOpen}
          id="canvas"
          ref={re}
        >
          <InnerCanvas />
        </Canvas>
      </div>
      <div className="absolute bottom-4 right-4">
        <button
          onClick={() => setDialogShown(true)}
          className="border bg-teal-300 py-1 p-2 m-2 rounded-full"
        >
          +
        </button>
      </div>
      <Menu visible={dialogShown} setVisible={setDialogShown} />
    </>
  );
}
