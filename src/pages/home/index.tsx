import React from "react";
import "./styles.css";
import { LogoSvg } from "../../components/logoSvg";
import image1 from "../../images/image2.png";
import { Link } from "react-router-dom"

export const HomePage = () => {
  const addToChrome = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/honey-automatic-coupons-r/bmnlcjabgnpnenekpadlanbbkooimhnj",
      "_self"
    );
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
        <Link to="/signIn">signIn</Link>
      </div>
    </div>
  );
};
