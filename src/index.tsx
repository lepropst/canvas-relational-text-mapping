import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { globalContext } from "./GlobalContext";
import { createRoot, extend, events } from "@react-three/fiber";
import * as THREE from "three";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// extend(THREE);

// const root = createRoot(document.getElementById("canvas") as HTMLCanvasElement);
// root.configure({ events, camera: { position: [0, 0, 50] } });
// window.addEventListener("resize", () => {
//   root.configure({
//     size: {
//       width: window.innerWidth,
//       height: window.innerHeight,
//       top: 0,
//       left: 0,
//     },
//   });
// });
// window.dispatchEvent(new Event("resize"));
// root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
