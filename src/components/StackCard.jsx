import React from "react";
import "./stackCard.css";

const StackCard = ({ image, percentage, title }) => {
  return (
    <div className="wrapper d-flex flex-column m-2 shadow">
      <div className="card">
        <img src={image} alt="" className="image" />
        <p className="text-success fw-bold fs-6">{title}</p>

        <span className="text-success">{percentage}</span>
      </div>
    </div>
  );
};

export default StackCard;
