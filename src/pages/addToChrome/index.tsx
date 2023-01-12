import React from "react";
import addToChromePng from "../../images/addToChrome.png";
import { useNavigate } from "react-router-dom";

export const AddToChromePage = () => {
  const navigate = useNavigate();
  const pageClick = () => {
    navigate("/signIn");
  };
  return (
    <div className="addToChrome-container" onClick={pageClick}>
      <img src={addToChromePng} alt={"add to chrome"} />
    </div>
  );
};
