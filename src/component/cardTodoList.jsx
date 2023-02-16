import React from "react";
import IconTrash from "../assets/icon_trash.svg";

const CardTodoList = ({ title, date, onClick }) => {
  return (
    <div className="containerTotoList" data-cy="cardTodoList">
      <h4 className="titleTodoList">{title}</h4>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="dateData">
        <p className="dateTodoList">{date}</p>
        <img src={IconTrash} width={"24px"} height={"24px"} onClick={onClick} />
      </div>
    </div>
  );
};

export default CardTodoList;
