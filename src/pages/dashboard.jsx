import axios from "axios";
import moment from "moment/moment";
import "moment/locale/id";
import React, { useEffect, useState } from "react";
import HeaderApp from "../component/header";
import ToastedActivityDeleted from "../component/toastedActivityDeleted";
import ModalDeleteActivity from "../component/modalDeleteActivity";
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
              <div className="mb-[20px]">
                <a
                  href={`/detail/${item.id}`}
                  key={index}
                  data-cy="activity-item"
                  className="flex h-60 flex-col rounded-xl bg-white p-6 text-left shadow-lg mb-[-48px]"
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
                  className="ml-auto pl-[190px] "
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

        <ToastedActivityDeleted
          showModalToasted={showModalToasted}
          handleCloseToasted={() => setModalToasted(false)}
        />
        <ModalDeleteActivity
          showModal={showModal}
          handleCloseModal={() => setShowModal(false)}
          handleDeleteActivity={handleDeleteActivity}
          itemForDelete={itemForDelete}
        />
      </main>
    </>
  );
};

export default Dashboard;
