import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ContextStories from "./Context/Stories.jsx";
import StyleContext from "./Context/StyleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextStories>
      <StyleContext>
        <App />
      </StyleContext>
    </ContextStories>
  </BrowserRouter>
);
