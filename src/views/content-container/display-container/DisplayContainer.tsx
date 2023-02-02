import DisplayStore from "../../../components/DisplayStore";
import TitleCounter from "../../../components/Title";
import shadyCounter from "../../shadyCounter";

const count = shadyCounter();
export default function DisplayContainer() {
  const renderCount = count();

  return (
    <div className="container">
      <TitleCounter title={<h4>Display Container</h4>} counter={renderCount} />
      <DisplayStore />
    </div>
  );
}
