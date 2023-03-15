import { useContext } from "react";
import { Vector3 } from "three";
import { globalContext } from "../GlobalContext";
import { useStore } from "../store";
import StandardBox from "./StandardBox";

export const Elements = () => {
  const { values } = useContext(globalContext);
  return (
    <>
      {values.elements.map((e: Vector3) => (
        <StandardBox position={e} />
      ))}
    </>
  );
};
