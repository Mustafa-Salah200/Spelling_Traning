import { useContext, useRef } from "react";
import { StoriesProvider } from "../Context/Stories";

function AddText(props) {
  const Cancel = props.Cancel;
  const name = useRef("");
  const discreption = useRef("");
  const { AddStory } = useContext(StoriesProvider);

  const SubmitData = () => {
    if (
      name.current !== "" &&
      name.current !== null &&
      discreption.current !== "" &&
      discreption.current !== null
    ) {
      const ob = {
        id: Date.now(),
        title: name.current,
        text: discreption.current,
      };
      AddStory(ob);
      name.current = "";
      discreption.current = "";
      Cancel();
    }
  };

  return (
    <div className="addtext">
      <div className="end">
        <span className="close" onClick={Cancel}></span>
      </div>
      <h2>CREATE NEW TEXT</h2>
      <input
        onChange={(e) => {
          name.current = e.target.value;
        }}
        className="name"
        type="text"
        name=""
        id="name"
        placeholder="The Name Of Text"
      />
      <textarea
        onChange={(e) => {
          discreption.current = e.target.value;
        }}
        className="tetx"
        type="text"
        placeholder="ADD YOUR NEW TEXT"
      ></textarea>
      <div className="option">
        <button className="cancel" onClick={Cancel}>
          CANCEL
        </button>
        <button className="add" onClick={SubmitData}>
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddText;
