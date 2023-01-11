import React from "react";
import { LogoSvg } from "../../components/logoSvg";
import signInImage from "../../images/signInPageImage.png";
import "./styles.css";

export const SingInPage = () => {
  return (
    <div className="signIn-container">
      <div className="signIn-leftSide">
        <LogoSvg />
        <p className="signIn-logoDescription">The smarter way to shop</p>
        <div className="signIn-signInContainer">
          <p className="signIn-title">Sign up to Sorbet</p>
          <p className="signIn-subtitle">
            Advance your unused PTO and get<br></br>an extra $50 on us!
          </p>
        </div>
      </div>
      <div className="signIn-rightSide">
        <img src={signInImage} alt="sign in" />
      </div>
    </div>
  );
};
