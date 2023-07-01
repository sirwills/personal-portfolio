import React from "react";
import "./stackCard.css";

const StackCard = ({ image, percentage, title }) => {
  return (
    <div className="wrapper m-4">
      <div className="card">
        <img src={image} alt="" className="image" />
        <p className="text-success fw-bold fs-5">{title}</p>

        <span className="text-success">{percentage}</span>
      </div>
    </div>
  );
};

export default StackCard;
