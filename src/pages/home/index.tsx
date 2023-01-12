import React from "react";
import "./styles.css";
import { LogoSvg } from "../../components/logoSvg";
import image1 from "../../images/image2.png";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const addToChrome = () => {
    navigate("/addToChrome");
  };
  return (
    <div className="container">
      <img src={image1} alt={"about"} />
      <div className="content">
        <LogoSvg />
        <p className="logoDescription">The smarter way to shop</p>
        <p className="title">
          Time is money,
          <br />
          spend it!
        </p>
        <p className="description">
          Advance your unused PTO and spend the cash today
        </p>
        <button onClick={addToChrome} className="button">
          Add to Chrome - It’s Free
        </button>
      </div>
    </div>
  );
};
