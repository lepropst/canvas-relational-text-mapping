import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as THREE from "three";
const AMOUNT = 6;

const ASPECT_RATIO = window.innerWidth / window.innerHeight;

const WIDTH = (window.innerWidth / AMOUNT) * window.devicePixelRatio;
const HEIGHT = (window.innerHeight / AMOUNT) * window.devicePixelRatio;

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  scene.add(camera);
  return <div className="App"></div>;
}

export default App;
