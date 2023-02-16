import React from "react";

const HeaderApp = () => {
  return (
    <div
      data-cy="header-background"
      className="bg-primary text-white h-[105px] text-2xl font-bold uppercase fixed flex inset-0 items-center "
    >
      <span data-cy="header-title">To Do List App</span>
    </div>
  );
};

export default HeaderApp;
