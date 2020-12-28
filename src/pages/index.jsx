import React, { useEffect, useState } from "react";
import Home from "../screens/Home/index";
import { isMobile } from "react-device-detect";
import "../styles/index.scss";

export default function App() {
  const [isMobileState, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  return (
    <div className="App">
      <Home isMobile={isMobileState} />
    </div>
  );
}
