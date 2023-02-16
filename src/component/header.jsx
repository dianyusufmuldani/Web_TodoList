import React from "react";

const HeaderApp = () => {
  return (
    <div
      data-cy="header-background"
      className="bg-primary text-white h-[105px] text-2xl font-bold fixed flex inset-0 items-center "
    >
      <div className="mx-auto w-full max-w-[1000px] text-2xl font-bold">
        <span data-cy="header-title">TO DO LIST APP</span>
      </div>
    </div>
  );
};

export default HeaderApp;
