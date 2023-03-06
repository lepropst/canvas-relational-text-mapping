import { useContext } from "react";
import { globalContext } from "../GlobalContext";

export default function Menu({ visible }: { visible: boolean }) {
  const { values, setValues } = useContext(globalContext);
  const handleAddElemennt = () => {
    console.log("adding iteem");
  };
  const actions = [{ label: "Add Item", action: handleAddElemennt }];
  return (
    <div
      className={`${
        visible ? "visible" : "hidden"
      } absolute w-screen h-1/4 bottom-0 bg-gradient-to-t to-teal-100 from-white border border-2 border-black p-4`}
    >
      {actions.map((e) => (
        <button
          onClick={e.action}
          className="rounded border py-.5 px-2 bg-slate-50"
        >
          {e.label}
        </button>
      ))}
      {values.elements &&
        values.elements.length &&
        values.elements.map((e: any) => <div>{JSON.stringify(e)}</div>)}
    </div>
  );
}
