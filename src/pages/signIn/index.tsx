import React, { useEffect } from "react";
import { LogoSvg } from "../../components/logoSvg";
import signInImage from "../../images/signInPageImage.png";
import "./styles.css";
import jwt_decode from "jwt-decode";

export const SingInPage = () => {
  const callback = (res: any) => {
    console.log("bla res", jwt_decode(res.credential));
  };
  useEffect(() => {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id:
        "284915362588-n696c2mt9buef8c9bpgd9voia1j9ncq6.apps.googleusercontent.com",
      callback: callback,
    });
    // @ts-ignore
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

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

          <div id={"signInDiv"}></div>
        </div>
      </div>
      <div className="signIn-rightSide">
        <img src={signInImage} alt="sign in" />
      </div>
    </div>
  );
};
