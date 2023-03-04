import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as THREE from "three";
import useWindowMeasurements from "./hooks/useWindowMeasurements";

function App() {
  const { ASPECT_RATIO, WIDTH, HEIGHT } = useWindowMeasurements(6);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, ASPECT_RATIO, 1, 1000);

  scene.add(camera);
  return <div className="App"></div>;
}

export default App;
