import React from "react";
import Header from "../../components/Other/demos/Header";

const Dialog = () => {
  const ref = React.useRef<any>(null);
  //type is any because HTMLDialogElement does not work now
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
      <Header link="https://caniuse.com/dialog" />
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

export default Dialog;
