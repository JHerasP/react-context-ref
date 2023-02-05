import { useRef } from "react";
import TitleCounter from "../../components/Title";
import { useStore } from "../../store/useStore";

export default function FullName() {
  const { state: name } = useStore((store) => store["name"]);
  const { state: secondName } = useStore((store) => store["secondName"]);
  const counter = useRef<number>(0);
  counter.current = counter.current + 1;
  return (
    <div className="container">
      <TitleCounter title={<small>{`Full Name : ${name} ${secondName}`}</small>} counter={counter.current} />
      <small>This component is only rendered when the values of name or secondName change</small>
    </div>
  );
}
