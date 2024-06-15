import { useContext } from "react";
import { StoriesProvider } from "../Context/Stories";
import { useNavigate } from "react-router-dom";

function Stories() {
  const { stories } = useContext(StoriesProvider);
  const navigate = useNavigate();
  return (
    <div className="stories_page">
      <h1 className="title">Stories</h1>

      <div className="allstories">
        {stories &&
          stories.map((ele) => {
            const p = ele.text;
            return (
              <div
                key={ele.id}
                className="story"
                onClick={() => navigate(`/stories/${ele.id}`)}
              >
                <h1>{ele.title}</h1>
                <h3>{p.slice(0, 100)}...</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Stories;
