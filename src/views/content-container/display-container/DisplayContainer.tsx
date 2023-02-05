import { useRef } from "react";
import DisplayStore from "../../../components/DisplayStore";
import TitleCounter from "../../../components/Title";

export default function DisplayContainer() {
  const counter = useRef<number>(0);
  counter.current = counter.current + 1;

  return (
    <div className="container">
      <TitleCounter title={<h4>Display Container</h4>} counter={counter.current} />
      <DisplayStore />
    </div>
  );
}
