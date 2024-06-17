import { useContext, useEffect, useRef, useState } from "react";
import { StoriesProvider } from "../Context/Stories";
import { useNavigate } from "react-router-dom";

function SelectStory() {
  const [show, setShow] = useState(false);
  const { stories } = useContext(StoriesProvider);
  const { SetActive } = useContext(StoriesProvider);
  const { activeStory } = useContext(StoriesProvider);
  const [story, setStory] = useState(activeStory.title || "SelectStory");
  const navogate = useNavigate();

  const refEle = useRef();
  const Show = () => {
    show ? setShow(false) : setShow(true);
    navogate("/stories");
  };

  const SetStory = (e) => {
    setStory(e.target.innerHTML);
    setShow(false);
    const active = stories.find((ele) => {
      return ele.title === e.target.innerHTML;
    });
    SetActive(active);
    navogate("/");
  };
  useEffect(() => {
    const handler = (event) => {
      if (refEle.current) {
        if (!refEle.current.contains(event.target)) {
          setShow(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="selectstory">
      <h3 onClick={Show}>{story.slice(0, 20)}</h3>
      {show && (
        <ul className="listoption" ref={refEle}>
          {stories &&
            stories.map((ele) => {
              return (
                <h3 key={ele.id} onClick={SetStory}>
                  {ele.title}
                </h3>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default SelectStory;
