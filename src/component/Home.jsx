import { useContext, useEffect } from "react";
import { useState } from "react";
import { StoriesProvider } from "../Context/Stories";
import { StyleProvider } from "../Context/StyleContext";

function Home() {
  const { activeStory } = useContext(StoriesProvider);
  const [word, setWord] = useState();
  const [paragraph, setParagraph] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const allword = activeStory.text.split(" ");

  const { mainStyle } = useContext(StyleProvider);
  function ReadText(w) {
    let utterance = new SpeechSynthesisUtterance(w);
    speechSynthesis.speak(utterance);
  }
  function OnWrite(e) {
    const value = e.target.value;
    value !== " " && setWord(e.target.value);
    setCharIndex(value.length);
    if (value[charIndex] === " ") {
      value !== " " && setParagraph((p) => [...p, word]);
      setWord([]);
      setCharIndex(0);
      ReadText(allword[paragraph.length + 1]);
      e.target.value = "";
      return;
    }
  }
  useEffect(() => {
    ReadText(allword[0]);
  }, []);
  useEffect(() => {
    setWord([]);
    setCharIndex(0);
    setParagraph([]);
  }, [activeStory]);
  return (
    <div>
      {paragraph.length < allword.length && (
        <div className="usetinput">
          <input
            className="text"
            onChange={OnWrite}
            type="text"
            placeholder="Start Your Test "
          />
          <button
            className="read"
            onClick={() => {
              ReadText(allword[paragraph.length])}
            }
          >
            Read
          </button>
        </div>
      )}
      <div
        className="content"
        style={{
          alignContent: paragraph.length < allword.length && "end",
          maxHeight: paragraph.length < allword.length && "160px",
          overflowY: paragraph.length < allword.length && "scroll",
        }}
      >
        {paragraph.map((ele, index) => {
          return (
            <span
              className="word"
              key={index}
              style={{
                fontSize: mainStyle.fontSize,
                color:
                  ele !== " "
                    ? allword[index].toLowerCase() !== ele.toLowerCase() &&
                      allword[index].toLowerCase() !==
                        `${ele.toLowerCase()},` &&
                      allword[index].toLowerCase() !==
                        `${ele.toLowerCase()}!` &&
                      allword[index].toLowerCase() !==
                        `${ele.toLowerCase()}.` &&
                      "#F44336"
                    : "#F44336",
              }}
            >
              <p style={{ height: "fit-content", marginBottom: "1px" }}>
                {allword[index].endsWith(".")
                  ? `${ele}.`
                  : allword[index].endsWith(",")
                  ? `${ele},`
                  : ele}
              </p>
              <span className="checkword">{allword[index]}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
