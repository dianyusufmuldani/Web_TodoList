import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../component/buttonPrimary";
import HeaderApp from "../component/header";
import TextTitle from "../component/textTitle";
import ImageEmpty from "../assets/activity_empty_state.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addData,
  getData,
  getDelete,
  setOneData,
} from "../service/redux/action/dataReducer";
import CardTodoList from "../component/cardTodoList";
import moment from "moment/moment";
import AlertConfirm from "../component/alertConfirm";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (item) => {
    console.log("isi item ini", item);
    setOpen(true);
    dispatch(setOneData(item));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getData());
    console.log("isi State", stateData.data);
  }, [stateData.data]);
  const handleDelete = () => {
    for (let i = 0; i < stateData.data.length; i++) {
      if (stateData.data[i].id === stateData.oneData.id) {
        const request = { id: stateData.data[i].id };
        console.log("data i", stateData.data[i]);
        dispatch(getDelete(request));
      }
    }
    setOpen(false);
  };

  const handleAddData = () => {
    const request = {
      title: "New Activity",
    };
    dispatch(addData(request));
  };
  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item md={12}>
          <HeaderApp />
          <div>
            <TextTitle value={"Activity"} />
            <ButtonPrimary value={"Tambah"} onClick={handleAddData} />
            <AlertConfirm
              onClose={handleClose}
              open={open}
              onDelete={handleDelete}
            />
            {stateData.data != null ? (
              <div className="coverData">
                {stateData.data.map((item, index) => {
                  return (
                    <CardTodoList
                      key={index}
                      title={item.title}
                      // date={Date(item.created_at).toLocaleString("id")}
                      date={moment(item.created_at).format("LL")}
                      onClick={() => handleOpen(item)}
                    />
                  );
                })}
              </div>
            ) : (
              <img src={ImageEmpty} className="imageEmpty" alt="ImageEmpty" />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
