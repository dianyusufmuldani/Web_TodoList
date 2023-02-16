import React from "react";
import ImageHeader from "../assets/header_background.png";

const HeaderApp = () => {
  return (
    <div className="header" data-cy="header">
      {/* <img src={ImageHeader} alt="ImageHeader" width={"100%"} height="105px" /> */}
      <h2 className="titleApp">To Do List App</h2>
    </div>
  );
};

export default HeaderApp;
