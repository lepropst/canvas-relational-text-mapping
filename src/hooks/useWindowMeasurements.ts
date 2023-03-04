import { useState } from "react";

export default function useWindowMeasurements(defaultValue: number) {
  const [val, setVal] = useState<number>(defaultValue);

  const ASPECT_RATIO = window.innerWidth / window.innerHeight;
  const WIDTH = (window.innerWidth / val) * window.devicePixelRatio;
  const HEIGHT = (window.innerHeight / val) * window.devicePixelRatio;
  return { ASPECT_RATIO, WIDTH, HEIGHT, setVal };
}
