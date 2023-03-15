// import { groundTexture } from "../images/textures"
import { useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";

import { Vector3, Frustum, Matrix4 } from "three";
import { globalContext } from "../GlobalContext";

export const Ground = ({ position }: { position: Vector3 }) => {
  const { values, setValues } = useContext(globalContext);
  const re = useRef(null);

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        const { x, y, z } = e.point;
        //  Object.values(e.point).map((val) => Math.floor(val));
        setValues({
          ...values,
          // elements: [...values.elements, new Vector3(x, y, z)],
          mouseElements:
            values.mouseElements.length > 2
              ? [new Vector3(x, y, z)]
              : [...values.mouseElements, new Vector3(x, y, z)],
        });
      }}
      ref={re}
      position={position}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" color={"black"} />
    </mesh>
  );
};
