import React, { useEffect, useRef } from "react";
import Header from "../../components/Other/demos/Header";

const Popover = () => {
  const ref = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    // have to setAttribute manually because of TypeScript not supporting popover attributes yet
    ref.current?.setAttribute("popover", "");
    button.current?.setAttribute("popovertarget", "popover");
  }, []);
  return (
    <div>
      <Header link="https://caniuse.com/mdn-api_htmlelement_popover" />
      <button ref={button}>Open popover</button>
      <div ref={ref} id="popover">
        Hello world
      </div>
    </div>
  );
};

export default Popover;
