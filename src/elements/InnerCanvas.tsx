import {
  KeyboardControls,
  KeyboardControlsEntry,
  Plane,
  Point,
  Points,
  Sky,
  useKeyboardControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Frustum, Matrix4, Vector3 } from "three";
import { globalContext } from "../GlobalContext";
import Marker from "./Marker";

import { Ground } from "./Ground";
import { Elements } from "./Elements";
import Camera from "./Camera";
import Controls from "./Controls";
import StandardBox from "./StandardBox";
import { controls } from "./controls_enum";

export default function InnerCanvas({}: {}) {
  const re = useRef(null);
  const { camera: cam } = useThree();
  const isPointInFov = (point: Vector3) => {
    cam.updateMatrix();
    cam.updateMatrixWorld();
    let frus = new Frustum();
    frus.setFromProjectionMatrix(
      new Matrix4().multiplyMatrices(
        cam.projectionMatrix,
        cam.matrixWorldInverse
      )
    );
    return frus.containsPoint(point);
  };

  const [values, setValues] = useState<{
    mouseElements: Vector3[];
    elements: Vector3[];
    groundPositions: Vector3[];
  }>({
    mouseElements: [],
    groundPositions: [new Vector3(0, 0, 0)],
    elements: [],
  });
  useEffect(() => {
    setValues({ ...values });
  }, []);
  const [camPosition, setCamPosition] = useState(new Vector3(0, 0, 10));

  return (
    <globalContext.Provider value={{ values: values, setValues: setValues }}>
      <ambientLight intensity={0.5} />

      <Elements />
      {values.groundPositions.map((e) => {
        return isPointInFov(e) ? <Ground position={e} /> : <></>;
      })}
      {values.mouseElements.length > 0 &&
        values.mouseElements.map((e: Vector3) => {
          return <Marker key={`${e.x}-${e.y}`} vector={e} />;
        })}

      <StandardBox position={new Vector3(0, 0, 0)} />
      <Camera position={camPosition} />
      <Controls />
    </globalContext.Provider>
  );
}
