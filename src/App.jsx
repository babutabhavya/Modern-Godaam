import React from "react";
import "./App.scss";
import Home from "./screens/Home/index";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div className="App">
      <Home isMobile={isMobile} />
    </div>
  );
}

export default App;
