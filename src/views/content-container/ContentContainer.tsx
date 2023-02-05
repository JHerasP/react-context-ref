import { useRef, useState } from "react";
import TitleCounter from "../../components/Title";
import DisplayContainer from "./display-container/DisplayContainer";
import FormContainer from "./form-container/FormContainer";
import FullName from "./FullName";

export default function ContentContainer() {
  const [textValue, setTextValue] = useState("");
  const counter = useRef<number>(0);
  counter.current = counter.current + 1;
  return (
    <div className="container">
      <TitleCounter title={<h3>Parent Container</h3>} counter={counter.current} />
      <div className="flex-column">
        <div>
          <small> Type here : </small>
          <input onChange={(e) => setTextValue(e.currentTarget.value)} value={textValue} />
        </div>
        <small> Changes on this Input will render the this container and lower</small>
      </div>
      <FormContainer />
      <DisplayContainer />
      <FullName />
    </div>
  );
}
