import React from "react";

const ModalDeleteActivity = ({
  showModal,
  handleDeleteActivity,
  handleCloseModal,
  itemForDelete,
}) => {
  return (
    <div>
      {showModal ? (
        <>
          <div
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 flex flex-col items-center bg-black/30"
          >
            <div
              data-cy="modal-delete"
              className="my-auto flex w-full max-w-lg flex-col items-center rounded-xl bg-white p-10 text-lg shadow-md"
            >
              <svg
                data-cy="modal-delete-icon"
                width={84}
                height={84}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42 52.5v.035M42 31.5v7-7ZM17.5 66.501h49a7 7 0 0 0 6.44-9.625L48.09 14.001a7 7 0 0 0-12.25 0L10.99 56.876a7 7 0 0 0 6.125 9.625"
                  stroke="#ED4C5C"
                  strokeWidth={4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p
                data-cy="modal-delete-title"
                className="mt-8 mb-11 text-center"
              >
                Apakah anda yakin menghapus activity
                <br />
                <b>{itemForDelete.title}?</b>
              </p>
              <div className="flex gap-5">
                <button
                  onClick={handleCloseModal}
                  data-cy="modal-delete-cancel-button"
                  className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-cancel text-secondary w-36 justify-center"
                >
                  Batal
                </button>
                <button
                  onClick={handleDeleteActivity}
                  data-cy="modal-delete-confirm-button"
                  className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-delete text-white w-36 justify-center"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ModalDeleteActivity;
