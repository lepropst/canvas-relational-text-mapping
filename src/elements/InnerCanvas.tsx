import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import { Vector3 } from "three";
import { globalContext } from "../GlobalContext";
import StandardBox from "./StandardBox";

export default function InnerCanvas({}: {}) {
  const { values, setValues } = useContext(globalContext);

  const handleMenuOpen = (e: any) => {
    const vec = new Vector3();

    vec.set(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1,
      0
    );
    if (values.mouseElements.length >= 3) {
      setValues({ ...values, mouseElements: [vec] });
    }
    setValues({ ...values, mouseElements: [...values.mouseElements, vec] });
  };
  return (
    <Canvas onClick={handleMenuOpen}>
      {values.mouseElements.map((e: Vector3) => {
        console.log(e);
        return <StandardBox position={e}></StandardBox>;
      })}
      <StandardBox position={[0, 0, 0]} />
    </Canvas>
  );
}
