import React from "react";
// eslint-disable-next-line
const HeaderApp = () => {
  return (
    <header
      data-cy="header-background"
      className="bg-primary fixed inset-0 flex h-[105px] items-center text-white [&+*]:mt-[105px] z-auto"
    >
      <div className="mx-auto w-full max-w-[1000px] text-2xl font-bold">
        <span data-cy="header-title">TO DO LIST APP</span>
      </div>
    </header>
  );
};

export default HeaderApp;
