import React from "react";
import HeaderApp from "../component/header";

const Dashboard = () => {
  return (
    <>
      <HeaderApp />
      <main className="mx-auto flex w-full max-w-[1000px] flex-col py-11">
        <div className="mb-11 flex">
          <h1 data-cy="activity-title" className="text-4xl font-bold">
            Activity
          </h1>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
