import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Stories from "./component/Stories";
import Setting from "./component/Setting";
import ShowStory from "./component/ShowStory";
import UpdateEle from "./component/UpdateEle";
import { useContext } from "react";
import { StyleProvider } from "./Context/StyleContext";

function App() {
  const { mainStyle } = useContext(StyleProvider);
  const root = document.querySelector(":root");

  root.style.setProperty("--main-color", mainStyle.mainColor);
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<ShowStory />} />
        <Route path="/stories/update/:id" element={<UpdateEle />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
