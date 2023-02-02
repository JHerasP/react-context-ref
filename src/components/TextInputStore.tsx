import { ContextStore, useStore } from "../store/useStore";
import shadyCounter from "../views/shadyCounter";
const count = shadyCounter();

export default function TextInputStore({ field }: { field: keyof ContextStore }) {
  const { state, dispatch } = useStore((store) => store[field]);
  const renderCount = count();

  return (
    <div className="flex-row">
      <div className="field">
        {field}:
        <input value={state} onChange={(e) => dispatch({ [field]: e.target.value })} />
      </div>
      <small> Renders: {renderCount}</small>
    </div>
  );
}
