import { useState } from "react";
import TitleCounter from "./components/Title";
import { Provider } from "./store/useStore";
import ContentContainer from "./views/content-container/ContentContainer";
import shadyCounter from "./views/shadyCounter";

const count = shadyCounter();

function App() {
  const [textValue, setTextValue] = useState("");

  const renderCount = count();

  return (
    <Provider>
      <div className="container">
        <TitleCounter title={<h2>Provider</h2>} counter={renderCount} />
        <div className="flex-column">
          <div>
            <small> Type here : </small>
            <input onChange={(e) => setTextValue(e.currentTarget.value)} value={textValue} />
          </div>
          <small> Changes on this Input will render the entire tree.</small>
        </div>
        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;
