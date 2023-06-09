import Header from "../../components/Other/demos/Header";
import Sandpack from "../../components/Sandpack";

const Popover = () => {
  return (
    <div>
      <Header link="https://caniuse.com/mdn-api_htmlelement_popover" />
      <Sandpack
        file={`import React from "react";
export default function Demo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const button = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    // have to setAttribute manually because of TypeScript
    // not supporting popover attributes yet
    ref.current?.setAttribute("popover", "");
    button.current?.setAttribute("popovertarget", "popover");
  }, []);
  return (
    <div>
      <button ref={button}>Open popover</button>
      <div ref={ref} id="popover">
        Hello world
      </div>
    </div>
  );
};`}
      />
    </div>
  );
};

import React from "react";
function Demo() {
  const ref = React.useRef<HTMLDivElement>(null);
  const button = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    // have to setAttribute manually because of TypeScript
    // not supporting popover attributes yet
    ref.current?.setAttribute("popover", "");
    button.current?.setAttribute("popovertarget", "popover");
  }, []);
  return (
    <div>
      <button ref={button}>Open popover</button>
      <div ref={ref} id="popover">
        Hello world
      </div>
    </div>
  );
}

export default Popover;
