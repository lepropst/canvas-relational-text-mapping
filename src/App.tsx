import React, { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as THREE from "three";
import useWindowMeasurements from "./hooks/useWindowMeasurements";
import {
  Canvas,
  createRoot,
  extend,
  useFrame,
  useThree,
  Vector3,
  _roots,
} from "@react-three/fiber";
import { globalContext } from "./GlobalContext";
import StandardBox from "./elements/StandardBox";
import Menu from "./components/Menu";

export default function App() {
  const [values, setValues] = useState<{
    mouseElements: Vector3[];
    elements: Vector3[];
  }>({
    mouseElements: [],
    elements: [],
  });

  const [dialogShown, setDialogShown] = useState(false);

  return (
    <globalContext.Provider value={{ values: values, setValues: setValues }}>
      <StandardBox position={[0, 0, 0]}></StandardBox>
    </globalContext.Provider>
  );
}
