import { useState } from "react";
import TitleCounter from "../../components/Title";
import shadyCounter from "../shadyCounter";
import DisplayContainer from "./display-container/DisplayContainer";
import FormContainer from "./form-container/FormContainer";
import FullName from "./FullName";

const count = shadyCounter();
export default function ContentContainer() {
  const renderCount = count();
  const [textValue, setTextValue] = useState("");
  return (
    <div className="container">
      <TitleCounter title={<h3>Parent Container</h3>} counter={renderCount} />
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
