import React from "react";
import "./stackCard.css";

const StackCard = ({ image, percentage, title }) => {
  return (
    <div className="wrapper m-4">
      <div className="card">
        <img src={image} alt="" className="image" />
        <p className="text-white">{title}</p>

        <span>{percentage}</span>
      </div>
    </div>
  );
};

export default StackCard;
