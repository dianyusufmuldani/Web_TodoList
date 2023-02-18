import React, { useState } from "react";
import IconNike from "../assets/nike.svg";

const ModalSelectSort = ({
  showSelectSort,
  handleTerbaru,
  handleTerlama,
  handleAZ,
  handleZA,
  handleBelumSelesai,
}) => {
  const [sortingBy, setSortingBy] = useState("Terbaru");
  return (
    <div>
      {showSelectSort ? (
        <div className="divide-cancel absolute mt-1 divide-y rounded-md bg-white shadow-lg z-0">
          <button
            data-cy="sort-selection"
            onClick={() => {
              handleTerbaru();
              setSortingBy("Terbaru");
            }}
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
            {sortingBy === "Terbaru" ? (
              <img src={IconNike} width={18} height={18} className="ml-auto" />
            ) : null}
          </button>

          <button
            onClick={() => {
              handleTerlama();
              setSortingBy("Terlama");
            }}
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
            {sortingBy === "Terlama" ? (
              <img src={IconNike} width={18} height={18} className="ml-auto" />
            ) : null}
          </button>
          <button
            onClick={() => {
              handleAZ();
              setSortingBy("AZ");
            }}
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
            {sortingBy === "AZ" ? (
              <img src={IconNike} width={18} height={18} className="ml-auto" />
            ) : null}
          </button>
          <button
            onClick={() => {
              handleZA();
              setSortingBy("ZA");
            }}
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
            {sortingBy === "ZA" ? (
              <img src={IconNike} width={18} height={18} className="ml-auto" />
            ) : null}
          </button>
          <button
            onClick={() => {
              handleBelumSelesai();
              setSortingBy("Belum");
            }}
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
            {sortingBy === "Belum" ? (
              <img src={IconNike} width={18} height={18} className="ml-auto" />
            ) : null}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ModalSelectSort;
