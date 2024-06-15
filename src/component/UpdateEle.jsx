import { useContext, useRef } from "react";
import { StoriesProvider } from "../Context/Stories";
import { useNavigate, useParams } from "react-router-dom";

function UpdateEle() {
  const id = useParams().id;
  const { UpdateStory } = useContext(StoriesProvider);
  const { stories } = useContext(StoriesProvider);
  const thisStorey = stories.find((ele) => ele.id === +id);
  const navigate = useNavigate();

  const name = useRef(thisStorey.title);
  const discreption = useRef(thisStorey.text);

  const SubmitData = () => {
    if (
      name.current !== "" &&
      name.current !== null &&
      discreption.current !== "" &&
      discreption.current !== null
    ) {
      const ob = {
        id: thisStorey.id,
        title: name.current,
        text: discreption.current,
      };
      UpdateStory(ob);
      name.current = "";
      discreption.current = "";
      Cancel();
    }
  };
  const Cancel = () => {
    navigate("/stories");
  };
  return (
    <div className="updateele">
      <h2>UPDATE YOUR TEXT</h2>
      <input
        onChange={(e) => {
          name.current = e.target.value;
        }}
        className="name"
        type="text"
        defaultValue={name.current}
        placeholder="The Name Of Text"
      />
      <textarea
        onChange={(e) => {
          discreption.current = e.target.value;
        }}
        className="tetx"
        type="text"
        defaultValue={discreption.current}
        placeholder="ADD YOUR NEW TEXT"
      ></textarea>
      <div className="option">
        <button className="cancel" onClick={Cancel}>
          CANCEL
        </button>
        <button className="update" onClick={SubmitData}>
          UPDATE
        </button>
      </div>
    </div>
  );
}

export default UpdateEle;
