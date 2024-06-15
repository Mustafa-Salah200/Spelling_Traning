import { useContext, useEffect, useState } from "react";
import { StyleProvider } from "../Context/StyleContext";

function Setting() {
  const { mainStyle } = useContext(StyleProvider);
  const [index, setIndex] = useState(mainStyle.fontSize || "20px");
  const { ChangeFontSize } = useContext(StyleProvider);
  const { ChangeColor } = useContext(StyleProvider);

  const SetActive = (ele) => {
    const size = ele.target.dataset.size;
    setIndex(size);
    ChangeFontSize(size);
  };
  const ChangeMainColor = (ele) => {
    const spans = document.querySelectorAll(".changeMainColor span");
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    ele.target.classList.add("active");
    const color = ele.target.dataset.color;
    const root = document.querySelector(":root");
    root.style.setProperty("--main-color", color);
    ChangeColor(color);
  };
  useEffect(() => {
    document.querySelectorAll(".changeMainColor span").forEach((span) => {
      mainStyle.mainColor === span.dataset.color &&
        span.classList.add("active");
    });
  }, []);
  return (
    <div className="setting_page">
      <h1 className="title">Setting</h1>
      <div className="settingcontent">
        <h2>Change The Main Color</h2>
        <div className="changeMainColor">
          <span
            className="main"
            style={{ backgroundColor: "#ffc107" }}
            data-color="#ffc107"
            onClick={ChangeMainColor}
          ></span>
          <span
            className="green"
            style={{ backgroundColor: "#009688" }}
            data-color="#009688"
            onClick={ChangeMainColor}
          ></span>
          <span
            className="purple"
            style={{ backgroundColor: "#9C27B0" }}
            data-color="#9C27B0"
            onClick={ChangeMainColor}
          ></span>
          <span
            className="red"
            style={{ backgroundColor: "#F44336" }}
            data-color="#F44336"
            onClick={ChangeMainColor}
          ></span>
          <span
            className="blue"
            style={{ backgroundColor: "#2196F3" }}
            data-color="#2196F3"
            onClick={ChangeMainColor}
          ></span>
        </div>
        <div className="changeFontSize">
          <h2>Chosse The Font Size :</h2>
          <div className="size_option">
            <span
              onClick={SetActive}
              id="1"
              style={{
                backgroundColor: index === "16px" && "var(--main-color)",
                color: index === "16px" && "#fff",
              }}
              data-size="16px"
            >
              Small
            </span>
            <span
              id="2"
              onClick={SetActive}
              style={{
                backgroundColor: index === "20px" && "var(--main-color)",
                color: index === "20px" && "#fff",
              }}
              data-size="20px"
            >
              Middile
            </span>
            <span
              id="3"
              onClick={SetActive}
              style={{
                backgroundColor: index === "28px" && "var(--main-color)",
                color: index === "28px" && "#fff",
              }}
              data-size="28px"
            >
              Large
            </span>
            <span
              id="4"
              onClick={SetActive}
              style={{
                backgroundColor: index === "35px" && "var(--main-color)",
                color: index === "35px" && "#fff",
              }}
              data-size="35px"
            >
              Very Large
            </span>
          </div>
        </div>
      </div>

      <p className="author">This Application Create By: Mustafa SalahAldin</p>
    </div>
  );
}

export default Setting;
