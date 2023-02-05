import { useRef } from "react";
import { ContextStore, useStore } from "../store/useStore";

export default function TextInputStore({ field }: { field: keyof ContextStore }) {
  const { state, dispatch } = useStore((store) => store[field]);
  const counter = useRef<number>(0);
  counter.current = counter.current + 1;

  return (
    <div className="flex-row">
      <div className="field">
        {field}:
        <input value={state} onChange={(e) => dispatch({ [field]: e.target.value })} />
      </div>
      <small> Renders: {counter.current}</small>
    </div>
  );
}
