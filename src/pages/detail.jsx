import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderApp from "../component/header";
import ImageEmpty from "../assets/todo-empty-state.png";
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState([]);
  const [dataOne, setDataOne] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showSelectPriority, setShowSelectPriority] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalDeleteSuccess, setShowModalDeleteSuccess] = useState(false);
  const [showSelectPriorityEdit, setShowSelectPriorityEdit] = useState(false);
  const [showModalEditItem, setShowModalEditItem] = useState(false);
  const [showAddItems, setShowAddItems] = useState(false);
  const [itemName, setItemName] = useState(null);
  const [priority, setPriority] = useState("Pilih Priority");
  const [title, setTitle] = useState(null);
  const [dataTitle, setDataTitle] = useState(null);
  const [checkFieldEdit, setCheckFieldEdit] = useState(true);
  const [checkFieldAdd, setCheckFieldAdd] = useState(true);
  const params = useParams();
  const { id } = params;
  console.log("isi data", data);
  useEffect(() => {
    if (itemName !== "" && itemName !== null && priority !== "Pilih Priority") {
      setCheckFieldAdd(false);
    } else {
      setCheckFieldAdd(true);
    }
  }, [itemName, priority]);
  useEffect(() => {
    if (data !== null || data !== undefined) {
      axios
        .get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
        .then((res) => {
          setData(res.data.todo_items);
          console.log("Success get 1 data", res.data.todo_items);
          setDataTitle(res.data.title);
        });
    } else {
    }
  });

  const handleEditActivity = () => {
    const request = { title: title };
    axios
      .patch(
        `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
        request
      )
      .then((res) => {
        console.log("Edited");
      });
  };

  const handleAddItems = () => {
    const request = {
      title: itemName,
      activity_group_id: id,
      priority: priority,
    };
    axios
      .post("https://todo.api.devcode.gethired.id/todo-items", request)
      .then((res) => {
        console.log(res);
      });
    setShowAddItems(false);
  };

  const handleDeleteItems = () => {
    axios
      .delete(`https://todo.api.devcode.gethired.id/todo-items/${dataOne.id}`)
      .then((res) => {
        console.log("item deleted", res);
      });
    setShowModalDelete(false);
    setShowModalDeleteSuccess(true);
  };
  return (
    <>
      <HeaderApp />
      <main
        className="mx-auto flex w-full max-w-[1000px] flex-col py-11"
        data-cy="activity-item"
      >
        <div className="flex h-[54px] items-center gap-5">
          <a data-cy="todo-back-button" className="mr-2" href="/">
            <svg
              width={16}
              height={24}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m3.667 12 8 8M3.667 12l8-8"
                stroke="#111"
                strokeWidth={5}
                strokeLinecap="square"
              ></path>
            </svg>
          </a>
          <input
            type="text"
            className="border-b border-black bg-transparent text-4xl font-bold outline-none -mb-px w-full"
            value={title}
            onChange={(value) => setTitle(value.target.value)}
            hidden={!showEdit}
          ></input>
          <h1
            data-cy="todo-title"
            className="text-4xl font-bold"
            hidden={showEdit}
          >
            {dataTitle}
          </h1>
          <button data-cy="todo-title-edit-button" onClick={handleEditActivity}>
            <svg
              onClick={() => setShowEdit(!showEdit)}
              width={24}
              height={24}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 20h4L18.5 9.5a2.829 2.829 0 0 0-4-4L4 16v4ZM13.5 6.5l4 4"
                stroke="#A4A4A4"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button
            onClick={() => setShowAddItems(true)}
            data-cy="todo-add-button"
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
        {/* <button data-cy="todo-empty-state" className="mx-auto mt-24">
          <img src={ImageEmpty}></img>
        </button> */}

        {data.map((item, index) => {
          return (
            <div className="mt-5 flex flex-col gap-[10px]">
              <div
                data-cy="todo-item"
                className="flex h-20 items-center gap-4 rounded-xl bg-white px-7 text-lg font-medium shadow-lg"
              >
                <span
                  data-cy="todo-item-checkbox"
                  className="border-secondary h-5 w-5 cursor-pointer border flex items-center justify-center"
                ></span>
                <span
                  data-cy="todo-item-priority-indicator"
                  className="rounded-full h-[9px] w-[9px]"
                ></span>
                <h3 data-cy="todo-item-title">{item.title}</h3>
                <button
                  data-cy="todo-item-edit-button"
                  onClick={() => setShowModalEditItem(true)}
                >
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 20h4L18.5 9.5a2.829 2.829 0 0 0-4-4L4 16v4ZM13.5 6.5l4 4"
                      stroke="#A4A4A4"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <button
                  data-cy="todo-item-delete-button"
                  className="ml-auto z-50"
                  onClick={() => {
                    setShowModalDelete(true);
                    setDataOne(item);
                  }}
                >
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
            </div>
          );
        })}

        {showAddItems ? (
          <div
            className="fixed inset-0 z-40 flex flex-col items-center bg-black/30"
            // onClick={() => setShowAddItems(false)}
          >
            <article
              data-cy="modal-add"
              className="my-auto w-full max-w-[830px] rounded-xl bg-white shadow-md"
            >
              <header className="border-primary flex h-[70px] items-center border-b px-[30px] text-lg font-semibold">
                <h3 className="modal-add-title">Tambah List Item</h3>
                <button
                  data-cy="modal-add-close-button"
                  className="ml-auto"
                  onClick={() => setShowAddItems(false)}
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
                  onClick={handleAddItems}
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
        {showModalDelete ? (
          <div className="fixed inset-0 z-40 flex flex-col items-center bg-black/30">
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
                Apakah anda yakin menghapus List Item
                <br />
                <b>{dataOne.title}?</b>
              </p>
              <div className="flex gap-5">
                <button
                  onClick={() => setShowModalDelete(false)}
                  data-cy="modal-delete-cancel-button"
                  className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-cancel text-secondary w-36 justify-center"
                >
                  Batal
                </button>
                <button
                  onClick={handleDeleteItems}
                  data-cy="modal-delete-confirm-button"
                  className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-delete text-white w-36 justify-center"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {showModalDeleteSuccess ? (
          <div
            data-cy="modal-information"
            className="fixed inset-0 z-40 flex flex-col items-center bg-black/30"
            onClick={() => setShowModalDeleteSuccess(false)}
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
        {showModalEditItem ? (
          <div className="fixed inset-0 z-40 flex flex-col items-center bg-black/30">
            <article
              data-cy="modal-add"
              className="my-auto w-full max-w-[830px] rounded-xl bg-white shadow-md"
            >
              <header className="border-primary flex h-[70px] items-center border-b px-[30px] text-lg font-semibold">
                <h3 data-cy="modal-add-title">Edit Item</h3>
                <button
                  data-cy="modal-add-close-button"
                  className="ml-auto"
                  onClick={() => setShowModalEditItem(false)}
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
                  type={"text"}
                  placeholder="Tambahkan nama list item"
                ></input>
                <label
                  data-cy="modal-add-priority-title"
                  className="mb-2 text-xs font-semibold uppercase"
                >
                  Priority
                </label>
              </div>
              <div onClick={() => setShowSelectPriority(!showSelectPriority)}>
                <button
                  data-cy="modal-add-priority-dropdown"
                  type="button"
                  className="border-primary flex h-[52px] w-52 items-center gap-4 rounded-md border py-4 px-5 ml-[30px] mt-[-30px] mb-[50px]"
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
                {showSelectPriorityEdit ? (
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
              <div className="border-primary border-t px-10 py-5">
                <button
                  data-cy="modal-add-save-button"
                  className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-primary text-white ml-auto w-40 justify-center disabled:opacity-20"
                  //   disabled={checkFieldEdit}
                >
                  Simpan
                </button>
              </div>
            </article>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default Detail;
