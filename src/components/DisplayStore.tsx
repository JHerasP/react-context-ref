import { useRef } from "react";
import { useStore } from "../store/useStore";

export default function DisplayStore() {
  const { state: selectedField } = useStore((store) => store["field"]);
  const { state: fieldValue } = useStore((store) => store[selectedField]);

  const counter = useRef<number>(0);
  counter.current = counter.current + 1;

  return (
    <div className="value">
      <div className="flex-row">
        {selectedField}: {fieldValue}
        <small> Renders: {counter.current}</small>
      </div>
    </div>
  );
}
