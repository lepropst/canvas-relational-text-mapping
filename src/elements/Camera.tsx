import {
  KeyboardControls,
  KeyboardControlsEntry,
  OrthographicCamera,
  PerspectiveCamera,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard";
import { controls } from "./controls_enum";

export default function Camera({ position }: { position: Vector3 }) {
  const reef = useRef<any>(null);
  const { camera: cam } = useThree();

  return (
    <>
      <PerspectiveCamera ref={reef} />
    </>
  );
}
