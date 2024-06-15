import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StoriesProvider } from "../Context/Stories";

function ShowStory() {
  const prams = useParams();
  const { stories } = useContext(StoriesProvider);
  const getStory = stories.find((ele) => ele.id === +prams.id);
  const navigate = useNavigate();
  const { RemoveStory } = useContext(StoriesProvider);

  const UpdateEle = () => {
    navigate(`/stories/update/${getStory.id}`);
  };
  const DeleteEle = () => {
    RemoveStory(getStory);
    navigate("/stories");
  };

  return (
    <div className="show_story">
      <h1>{getStory.title}</h1>
      <p>{getStory.text}</p>
      <p>
        <button className="update" onClick={UpdateEle}>
          Update
        </button>
        <button className="delete" onClick={DeleteEle}>
          Delete
        </button>
      </p>
    </div>
  );
}

export default ShowStory;
