import { Box, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import {
  BoxGeometry,
  Material,
  MeshBasicMaterial,
  PlaneGeometry,
  Vector3,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";

export default function DefaultBox({
  position,
  content,
  material,
  color = "red",
}: {
  position: Vector3;
  content?: string;
  material?: Material;
  color?: string;
}) {
  const [geo, setGeo] = useState<any>();
  const [font, setFont] = useState<Font>();
  const re = useRef(null);
  useEffect(() => {}, []);
  return (
    <Html
      position={position}
      style={{ width: "auto", background: color }}
      color={color}
    >
      <div ref={re} id="text">
        text
      </div>
    </Html>
  );
}
