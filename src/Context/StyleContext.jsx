import { createContext, useEffect, useState } from "react";

export const StyleProvider = createContext();
const GetData = JSON.parse(window.localStorage.getItem("mainstyle"));

function StyleContext(props) {
  const [mainStyle, setMainStyle] = useState(
    GetData || {
      fontSize: "20px",
      mainColor: "#ffc107",
    }
  );

  const ChangeColor = (newcolor) => {
    return setMainStyle({ ...mainStyle, mainColor: newcolor });
  };
  const ChangeFontSize = (newsize) => {
    return setMainStyle({ ...mainStyle, fontSize: newsize });
  };

  useEffect(() => {
    window.localStorage.setItem("mainstyle", JSON.stringify(mainStyle));
  }, [mainStyle]);
  return (
    <StyleProvider.Provider
      value={{
        mainStyle,
        ChangeFontSize,
        ChangeColor,
      }}
    >
      {props.children}
    </StyleProvider.Provider>
  );
}

export default StyleContext;
