import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil"; // Import RecoilRoot
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    {/* Wrap your App component with RecoilRoot */}
    <App />
  </RecoilRoot>
);
