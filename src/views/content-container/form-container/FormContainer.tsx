import { useCallback, useRef } from "react";
import TextInputStore from "../../../components/TextInputStore";
import TitleCounter from "../../../components/Title";
import { useStore } from "../../../store/useStore";

export default function FormContainer() {
  const { state, dispatch } = useStore((store) => store["field"]);
  const counter = useRef<number>(0);
  counter.current = counter.current + 1;

  const changeField = useCallback(() => {
    if (state === "name") dispatch({ field: "secondName" });
    else dispatch({ field: "name" });
  }, [state, dispatch]);

  return (
    <div className="container">
      <TitleCounter title={<h4>Form Container</h4>} counter={counter.current} />
      <div className="flex-column">
        <small>The next input Store and will only render itself and the display associated to it's value</small>
        <TextInputStore field={state} />
      </div>
      See the changes on the store by <button onClick={changeField}>Change Field </button>
    </div>
  );
}
