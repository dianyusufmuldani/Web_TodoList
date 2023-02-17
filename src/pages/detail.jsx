import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HeaderApp from "../component/header";
import ImageEmpty from "../assets/todo-empty-state.png";
import axios from "axios";
import ModalEdit from "../component/modalEdit";
import ToastedDeleteSuccess from "../component/toastedDeleteSuccess";
import ModalDelete from "../component/modalDelete";
import ModalAddItems from "../component/modalAddItems";
import ModalSelectSort from "../component/modalSelectSort";

const Detail = () => {
  const [data, setData] = useState([]);
  const [dataOne, setDataOne] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showSelectPriority, setShowSelectPriority] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalDeleteSuccess, setShowModalDeleteSuccess] = useState(false);
  const [showModalEditItem, setShowModalEditItem] = useState(false);
  const [showAddItems, setShowAddItems] = useState(false);
  const [itemName, setItemName] = useState(null);
  const [priority, setPriority] = useState("Pilih Priority");
  const [title, setTitle] = useState(null);
  const [dataTitle, setDataTitle] = useState(null);
  const [sorted, setSorted] = useState({ sorted: "title", reversed: false });
  const [showSelectSort, setShowSelectSort] = useState(false);
  const params = useParams();
  const { id } = params;
  console.log("isi data", dataOne);

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
  }, [data]);

  const SortAscending = () => {
    var newData = data.sort((a, b) => a.id - b.id);
    console.log("ini New Data", newData);
    setData(newData);
  };

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

  const handleAddItems = (itemName, priority) => {
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

  const handleActiveItems = (item) => {
    const request = { is_active: 0 };
    axios
      .patch(
        `https://todo.api.devcode.gethired.id/todo-items/${item.id}`,
        request
      )
      .then((res) => {
        console.log("not active");
      });
  };
  const handleInActiveItems = (item) => {
    const request = { is_active: 1 };
    axios
      .patch(
        `https://todo.api.devcode.gethired.id/todo-items/${item.id}`,
        request
      )
      .then((res) => {
        console.log("actived");
      });
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
          {data.length !== 0 ? (
            <div className="relative ml-auto">
              <button
                data-cy="todo-sort-button"
                className="border-primary h-[54px] w-[54px] rounded-full border"
                onClick={() => setShowSelectSort(!showSelectSort)}
              >
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <path
                    d="m3 9 4-4m0 0 4 4M7 5v14M21 15l-4 4m0 0-4-4m4 4V5"
                    stroke="#888"
                    strokeWidth={1.5}
                    strokeLinecap="square"
                  ></path>
                </svg>
              </button>
              <ModalSelectSort showSelectSort={showSelectSort} />
            </div>
          ) : null}
          <button
            // onClick={SortAscending}
            onClick={() => setShowAddItems(true)}
            data-cy="todo-add-button"
            className="flex h-[54px] items-center gap-[6px] rounded-full px-7 font-semibold hover:opacity-70 bg-primary text-white "
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
            <div key={index} className="mt-5 flex flex-col gap-[10px]">
              <div
                data-cy="todo-item"
                className="flex h-20 items-center gap-4 rounded-xl bg-white px-7 text-lg font-medium shadow-lg"
              >
                {item.is_active == 1 ? (
                  <>
                    <span
                      onClick={() => handleActiveItems(item)}
                      data-cy="todo-item-checkbox"
                      className="border-secondary h-5 w-5 cursor-pointer border flex items-center justify-center z-auto"
                    ></span>
                    <span
                      data-cy="todo-item-priority-indicator"
                      className="rounded-full h-[9px] w-[9px]"
                    ></span>
                    <h3 data-cy="todo-item-title">{item.title}</h3>
                  </>
                ) : (
                  <>
                    <span
                      onClick={() => handleInActiveItems(item)}
                      data-cy="todo-item-checkbox"
                      className="h-5 w-5 cursor-pointer border flex items-center justify-center border-blue bg-primary  z-auto"
                    >
                      <svg
                        width={14}
                        height={14}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m2.917 7 2.916 2.917 5.833-5.834"
                          stroke="#fff"
                          strokeWidth={2}
                          strokeLinecap="square"
                        ></path>
                      </svg>
                    </span>
                    <span
                      data-cy="todo-item-priority-indicator"
                      className="rounded-full h-[9px] w-[9px]"
                    ></span>
                    <h3 data-cy="todo-item-title">
                      <s>{item.title}</s>
                    </h3>
                  </>
                )}
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
                  className="ml-auto z-auto"
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

        <ModalAddItems
          handleAddItems={handleAddItems}
          showAddItems={showAddItems}
          handleCloseModalAddItems={() => setShowAddItems(false)}
        />
        <ModalDelete
          handleCancelModal={() => setShowModalDelete(false)}
          handleDeleteItems={handleDeleteItems}
          showModalDelete={showModalDelete}
          dataOne={dataOne}
        />
        <ToastedDeleteSuccess
          showModalDeleteSuccess={showModalDeleteSuccess}
          handleCancelToasted={() => setShowModalDeleteSuccess(false)}
        />
        <ModalEdit
          showModalEditItem={showModalEditItem}
          showSelectPriority={showSelectPriority}
          handleCancelEditItem={() => setShowModalEditItem(false)}
          handleSelectPriority={() =>
            setShowSelectPriority(!showSelectPriority)
          }
        />
      </main>
    </>
  );
};

export default Detail;
