import React from "react";
import "./App.css";
import { LogoSvg } from "./components/logoSvg";
import image1 from "./images/image2.png";

function App() {
  const addToChrome = () => {
    console.log("bla add to chrome");
  };
  return (
    <div className="container">
      <img src={image1} alt={"about"} />
      <div className="content">
        <LogoSvg />
        <p className="logoDescription">PTO Shopping Companion</p>
        <p className="title">
          Level up your shopping
          <br />
          experience with
          <br />
          unused paid time off{" "}
        </p>
        <p className="description">
          Get instant cash by signing up and applying.
        </p>
        <button onClick={addToChrome} className="button">
          Add to Chrome - It’s Free
        </button>
      </div>
    </div>
  );
}

export default App;
