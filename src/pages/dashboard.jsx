import axios from "axios";
import moment from "moment/moment";
import "moment/locale/id";
import React, { useEffect, useState } from "react";
import HeaderApp from "../component/header";
// eslint-disable-next-line
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [itemForDelete, setItemForDelete] = useState(null);
  const [showModalToasted, setModalToasted] = useState(false);
  console.log("item ini", itemForDelete);
  useEffect(() => {
    axios
      .get(
        "https://todo.api.devcode.gethired.id/activity-groups?email=dianyusufmuldani@gmail.com"
      )
      .then((res) => {
        setData(res.data.data);
        console.log("isi Data", data);
      });
  }, [data]);

  const AddActiviy = () => {
    axios
      .post("https://todo.api.devcode.gethired.id/activity-groups/", {
        email: "dianyusufmuldani@gmail.com",
        title: "New Activity",
      })
      .then((res) => {
        console.log(res);
      });
  };
  const handleModalDelete = (item) => {
    setShowModal(true);
    setItemForDelete(item);
  };

  const handleDeleteActivity = () => {
    console.log("itemfordelte", itemForDelete);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === itemForDelete.id) {
        const request = { itemDelete: data[i] };
        axios
          .delete(
            `https://todo.api.devcode.gethired.id/activity-groups/${request.itemDelete.id}`
          )
          .then((res) => {
            console.log("deleted", res);
          });
      }
    }
    setShowModal(false);
    setModalToasted(true);
  };
  return (
    <>
      <HeaderApp />
      <main className="mx-auto flex w-full max-w-[1000px] flex-col py-11">
        <div className="mb-11 flex">
          <h1 data-cy="activity-title" className="text-4xl font-bold">
            Activity
          </h1>
          <button
            onClick={AddActiviy}
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
          {data.map((item, index) => {
            return (
              <div>
                <a
                  href={`/detail/${item.id}`}
                  key={index}
                  data-cy="activity-item"
                  className="flex h-60 flex-col rounded-xl bg-white p-6 text-left shadow-lg "
                >
                  <h3
                    data-cy="activity-item-title"
                    className="text-lg font-bold"
                  >
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center">
                    <span
                      data-cy="activity-item-date"
                      className="text-dimmed text-sm font-medium"
                    >
                      {moment(item.created_at).format("LL")}
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => handleModalDelete(item)}
                  data-cy="activity-item-delete-button"
                  className="ml-auto"
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
            );
          })}
        </div>

        {showModal ? (
          <>
            <div
              onClick={() => setShowModal(false)}
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
                    onClick={() => setShowModal(false)}
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
        {showModalToasted ? (
          <div
            onClick={() => setModalToasted(false)}
            className="fixed inset-0 z-50 flex flex-col items-center bg-black/30"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p data-cy="modal-information-title">Activity berhasil dihapus</p>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default Dashboard;
