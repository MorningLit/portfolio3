import Header from "../../components/Other/demos/Header";
import Sandpack from "../../components/Sandpack";

const Dialog = () => {
  return (
    <div>
      <Header link="https://caniuse.com/dialog" />
      <Sandpack
        file={`import React from "react";
export default function Demo() {
  const ref = React.useRef<any>(null);
  //type is any because TypeScript does not support HTMLDialogElement's methods
  const [fruit, setFruit] = React.useState("");
  const handleCancel = () => {
    ref.current?.close();
  };
  const handleSubmit = (e: any) => {
    //type is any because it is a pain in the ass to set up form name types properly
    e.preventDefault();
    setFruit(e.target.fruit.value);
    ref.current?.close();
  };
  return (
    <div>
      <dialog ref={ref}>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Favorite fruit:
              <select name="fruit">
                <option value="default">Choose…</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value={"Orange"}>Orange</option>
              </select>
            </label>
          </p>
          <div>
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </dialog>
      <button onClick={() => ref.current?.showModal()}>Show the dialog</button>
      <p>Fruit selected: {fruit}</p>
    </div>
  );
};
`}
      />
    </div>
  );
};

import React from "react";
function Demo() {
  const ref = React.useRef<any>(null);
  //type is any because TypeScript does not support HTMLDialogElement's methods
  const [fruit, setFruit] = React.useState("");
  const handleCancel = () => {
    ref.current?.close();
  };
  const handleSubmit = (e: any) => {
    //type is any because it is a pain in the ass to set up form name types properly
    e.preventDefault();
    setFruit(e.target.fruit.value);
    ref.current?.close();
  };
  return (
    <div>
      <dialog ref={ref}>
        <form onSubmit={handleSubmit}>
          <p>
            <label>
              Favorite fruit:
              <select name="fruit">
                <option value="default">Choose…</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value={"Orange"}>Orange</option>
              </select>
            </label>
          </p>
          <div>
            <button onClick={handleCancel}>Cancel</button>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </dialog>
      <button onClick={() => ref.current?.showModal()}>Show the dialog</button>
      <p>Fruit selected: {fruit}</p>
    </div>
  );
}
export default Dialog;
