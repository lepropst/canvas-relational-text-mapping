import { Box } from "@react-three/drei";
import { useState } from "react";
import { Vector3 } from "three";

export default function DefaultBox({
  position,
  content,
}: {
  position: number[] | Vector3;
  content?: string;
}) {
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <Box
      position={
        Array.isArray(position)
          ? new Vector3(position[0], position[1], position[2])
          : position
      }
    ></Box>
  );
}
