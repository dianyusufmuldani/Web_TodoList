import React from "react";
import IconPlus from "../assets/plus_icon.svg";

const ButtonPrimary = ({ value, onClick }) => {
  return (
    <div>
      <button className="buttonPrimary" onClick={onClick}>
        <img src={IconPlus} width="14px" alt="Icon Plus" />
        {` ${value}`}
      </button>
    </div>
  );
};

export default ButtonPrimary;
