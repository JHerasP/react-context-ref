import React, { ReactNode } from "react";

export default function TitleCounter({ counter, title }: { counter: number; title: ReactNode }) {
  return (
    <div className="flex-row">
      {title} Renders: {counter}
    </div>
  );
}
