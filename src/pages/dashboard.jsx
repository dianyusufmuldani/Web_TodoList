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
          <button
            data-cy="activity-add-button"
            className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-primary text-white ml-auto"
          >
            <svg
              width={24}
              height={24}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5v14M5 12h14"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="square"
                strokeLinejoin="round"
              ></path>
            </svg>
            Tambah
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <a
            data-cy="activity-item"
            className="flex h-60 flex-col rounded-xl bg-white p-6 text-left shadow-lg"
          >
            <h3 data-cy="activity-item-title" className="text-lg font-bold">
              New Activity
            </h3>
            <div className="mt-auto flex items-center">
              <span
                data-cy="activity-item-date"
                className="text-dimmed text-sm font-medium"
              >
                16 Februari 2023
              </span>
              <button data-cy="activity-item-delete-button" className="ml-auto">
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                    stroke="#888"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </a>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
