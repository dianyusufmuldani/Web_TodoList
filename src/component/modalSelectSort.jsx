import React from "react";

const ModalSelectSort = ({ showSelectSort, handleTerbaru }) => {
  return (
    <div>
      {showSelectSort ? (
        <div className="divide-cancel absolute mt-1 divide-y rounded-md bg-white shadow-lg z-auto">
          <button
            onClick={handleTerbaru}
            data-cy="sort-selection"
            className="flex h-[52px] w-56 items-center gap-4 py-4 px-5"
          >
            <svg
              width={18}
              height={18}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5h6.75M3 9h5.25M3 13.5h5.25M11.25 11.25l2.25 2.25 2.25-2.25M13.5 4.5v9"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Terbaru
          </button>
          <button
            data-cy="sort-selection"
            className="flex h-[52px] w-56 items-center gap-4 py-4 px-5"
          >
            <svg
              width={18}
              height={18}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5h5.25M3 9h5.25M3 13.5h6.75M11.25 6.75 13.5 4.5l2.25 2.25M13.5 4.5v9"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Terlama
          </button>
          <button
            data-cy="sort-selection"
            className="flex h-[52px] w-56 items-center gap-4 py-4 px-5"
          >
            <svg
              width={18}
              height={18}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 7.5V3.75c0-1.035.465-1.5 1.5-1.5s1.5.465 1.5 1.5V7.5m0-2.25h-3M14.25 15.75h-3l3-5.25h-3M3 11.25l2.25 2.25 2.25-2.25M5.25 4.5v9"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            A-Z
          </button>
          <button
            data-cy="sort-selection"
            className="flex h-[52px] w-56 items-center gap-4 py-4 px-5"
          >
            <svg
              width={18}
              height={18}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 7.5V3.75c0-1.035.465-1.5 1.5-1.5s1.5.465 1.5 1.5V7.5m0-2.25h-3M14.25 15.75h-3l3-5.25h-3M3 11.25l2.25 2.25 2.25-2.25M5.25 4.5v9"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Z-A
          </button>
          <button
            data-cy="sort-selection"
            className="flex h-[52px] w-56 items-center gap-4 py-4 px-5"
          >
            <svg
              width={18}
              height={18}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m2.25 6.75 3-3m0 0 3 3m-3-3v10.5M15.75 11.25l-3 3m0 0-3-3m3 3V3.75"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            Belum Selesai
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ModalSelectSort;
