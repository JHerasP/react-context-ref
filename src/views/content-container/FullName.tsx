import TitleCounter from "../../components/Title";
import { useStore } from "../../store/useStore";
import shadyCounter from "../shadyCounter";

const count = shadyCounter();

export default function FullName() {
  const { state: name } = useStore((store) => store["name"]);
  const { state: secondName } = useStore((store) => store["secondName"]);
  const renderCount = count();
  return (
    <div className="container">
      <TitleCounter title={<small>{`Full Name : ${name} ${secondName}`}</small>} counter={renderCount} />
      <small>This component is only rendered when the values of name or secondName change</small>
    </div>
  );
}
