import {
  MapControls,
  OrbitControls,
  useKeyboardControls,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { controls } from "./controls_enum";

export default function Controls() {
  const [camera, setCamera] = useState<any>({
    position: new Vector3(0, 0, 100),
  });
  return (
    <OrbitControls
      enableDamping={false}
      //   minAzimuthAngle={0}
      //   maxAzimuthAngle={0}
      //   minPolarAngle={0}
      //   maxPolarAngle={0}
      keys={{
        LEFT: "a" || "A", //left arrow
        UP: "w" || "W", // up arrow
        RIGHT: "d" || "D", // right arrow
        BOTTOM: "s" || "S", // down arrow
      }}
      enablePan={true}
      enableRotate={false}
      enableZoom={true}
    />
  );
}
