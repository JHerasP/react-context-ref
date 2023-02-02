import { useStore } from "../store/useStore";
import shadyCounter from "../views/shadyCounter";

const count = shadyCounter();
export default function DisplayStore() {
  const renderCount = count();
  const { state: selectedField } = useStore((store) => store["field"]);
  const { state: fieldValue } = useStore((store) => store[selectedField]);

  return (
    <div className="value">
      <div className="flex-row">
        {selectedField}: {fieldValue}
        <small> Renders: {renderCount}</small>
      </div>
    </div>
  );
}
