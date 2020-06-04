import React from "react";
import { ReactComponent as SkewButtonIcon } from "./skewButton.svg";
import "./skewButton.scss";

const SkewButton = (props) => {
  return (
    <div className="wrapper">
      <button className="cta"  onClick={props.children.onclick}>
        <span>{props.children.label}</span>
        <span>
          <SkewButtonIcon />
        </span>
      </button>
    </div>
  );
};

export default SkewButton;
