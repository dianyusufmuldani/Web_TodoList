import React, { useEffect, useState } from "react";

const ModalAddItems = ({
  handleAddItems,
  showAddItems,
  handleCloseModalAddItems,
}) => {
  const [showSelectPriority, setShowSelectPriority] = useState(false);
  const [itemName, setItemName] = useState(null);
  const [priority, setPriority] = useState("Pilih Priority");
  const [checkFieldAdd, setCheckFieldAdd] = useState(true);
  useEffect(() => {
    if (itemName !== "" && itemName !== null && priority !== "Pilih Priority") {
      setCheckFieldAdd(false);
    } else {
      setCheckFieldAdd(true);
    }
  }, [itemName, priority]);
  return (
    <div>
      {showAddItems ? (
        <div
          className="fixed inset-0 z-auto flex flex-col items-center bg-black/30"
          // onClick={() => setShowAddItems(false)}
        >
          <article
            data-cy="modal-add"
            className="my-auto w-full max-w-[830px] rounded-xl bg-white shadow-md"
          >
            <header className="border-primary flex h-[70px] items-center border-b px-[30px] text-lg font-semibold z-10">
              <h3 className="modal-add-title">Tambah List Item</h3>
              <button
                data-cy="modal-add-close-button"
                className="ml-auto"
                onClick={handleCloseModalAddItems}
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6 6 18M6 6l12 12"
                    stroke="#A4A4A4"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="flex flex-col p-8">
              <label
                data-cy="modal-add-name-title"
                className="mb-2 text-xs font-semibold uppercase"
              >
                Nama List Item
              </label>
              <input
                data-cy="modal-add-name-input"
                className="border-primary mb-6 h-[52px] rounded-md border py-[14px] px-[18px] outline-none focus:border-[#16ABF8]"
                type="text"
                placeholder="Tambahkan nama list item"
                value={itemName}
                onChange={(value) => setItemName(value.target.value)}
              ></input>
              <div onClick={() => setShowSelectPriority(!showSelectPriority)}>
                <button
                  data-cy="modal-add-priority-dropdown"
                  type="button"
                  className="border-primary flex h-[52px] w-52 items-center gap-4 rounded-md border py-4 px-5"
                >
                  {priority}
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-180 ml-auto"
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      stroke="#111"
                      strokeLinecap="square"
                    ></path>
                  </svg>
                </button>
                {showSelectPriority ? (
                  <div className="divide-primary absolute divide-y rounded-md bg-white border-primary mt-0 flex w-52 flex-col rounded-t-none border border-t-0">
                    <button
                      onClick={() => setPriority("very-high")}
                      data-cy="modal-add-priority-item"
                      className="flex h-[52px] items-center gap-4 py-4 px-5 w-auto"
                    >
                      <span className="h-[14px] w-[14px] rounded-full "></span>
                      Very High
                      {priority === "very-high" ? (
                        <svg
                          width={18}
                          height={18}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto"
                        >
                          <path
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                            stroke="#4A4A4A"
                            strokeLinecap="square"
                          ></path>
                        </svg>
                      ) : null}
                    </button>
                    <button
                      onClick={() => setPriority("high")}
                      data-cy="modal-add-priority-item"
                      className="flex h-[52px] items-center gap-4 py-4 px-5 w-auto"
                    >
                      <span className="h-[14px] w-[14px] rounded-full"></span>
                      High
                      {priority === "high" ? (
                        <svg
                          width={18}
                          height={18}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto"
                        >
                          <path
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                            stroke="#4A4A4A"
                            strokeLinecap="square"
                          ></path>
                        </svg>
                      ) : null}
                    </button>
                    <button
                      onClick={() => setPriority("normal")}
                      data-cy="modal-add-priority-item"
                      className="flex h-[52px] items-center gap-4 py-4 px-5 w-auto"
                    >
                      <span className="h-[14px] w-[14px] rounded-full"></span>
                      Medium
                      {priority === "normal" ? (
                        <svg
                          width={18}
                          height={18}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto"
                        >
                          <path
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                            stroke="#4A4A4A"
                            strokeLinecap="square"
                          ></path>
                        </svg>
                      ) : null}
                    </button>
                    <button
                      onClick={() => setPriority("low")}
                      data-cy="modal-add-priority-item"
                      className="flex h-[52px] items-center gap-4 py-4 px-5 w-auto"
                    >
                      <span className="h-[14px] w-[14px] rounded-full"></span>
                      Low
                      {priority === "low" ? (
                        <svg
                          width={18}
                          height={18}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto"
                        >
                          <path
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                            stroke="#4A4A4A"
                            strokeLinecap="square"
                          ></path>
                        </svg>
                      ) : null}
                    </button>
                    <button
                      onClick={() => setPriority("very-low")}
                      data-cy="modal-add-priority-item"
                      className="flex h-[52px] items-center gap-4 py-4 px-5 w-auto"
                    >
                      <span className="h-[14px] w-[14px] rounded-full"></span>
                      Very Low
                      {priority === "very-low" ? (
                        <svg
                          width={18}
                          height={18}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-auto"
                        >
                          <path
                            d="m3.75 9 3.75 3.75 7.5-7.5"
                            stroke="#4A4A4A"
                            strokeLinecap="square"
                          ></path>
                        </svg>
                      ) : null}
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="border-primary border-t px-10 py-5">
              <button
                onClick={() => handleAddItems(itemName, priority)}
                className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-primary text-white ml-auto w-40 justify-center disabled:opacity-20"
                data-cy="modal-add-save-button"
                disabled={checkFieldAdd}
              >
                Simpan
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
};

export default ModalAddItems;
