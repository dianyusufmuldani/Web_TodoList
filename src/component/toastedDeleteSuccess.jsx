import React from "react";

const ToastedDeleteSuccess = ({
  showModalDeleteSuccess,
  handleCancelToasted,
}) => {
  return (
    <div>
      {showModalDeleteSuccess ? (
        <div
          data-cy="modal-information"
          className="fixed inset-0 z-40 flex flex-col items-center bg-black/30"
          onClick={handleCancelToasted}
        >
          <div
            data-cy="modal-information"
            className="mt-48 flex w-full max-w-lg items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm shadow-md"
          >
            <svg
              data-cy="modal-information-icon"
              width={24}
              height={24}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 8v4M12 16h.01"
                stroke="#00A790"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p data-cy="modal-information-title">Todo berhasil dihapus</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ToastedDeleteSuccess;
