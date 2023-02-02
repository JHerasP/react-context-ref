import { useEffect, useState } from "react";

export default function RenderCouter() {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    setCounter((crt) => crt + 1);
  }, []);

  return <div>Render times: {counter}</div>;
}
