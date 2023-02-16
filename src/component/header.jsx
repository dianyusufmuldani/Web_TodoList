import React from "react";

const HeaderApp = () => {
  return (
    <div
      className="bg-primary text-white h-105 text-2xl font-bold pt-38 pl-220 uppercase"
      data-cy="header-background"
    >
      <span data-cy="header-title">To Do List App</span>
    </div>
  );
};

export default HeaderApp;
