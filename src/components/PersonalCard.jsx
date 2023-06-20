import React from "react";
import "../components/personcalCard.css";
// import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const PersonalCard = () => {
  return (
    <div className="personal-card">
      <div className="personalCard-wrapper">
        <div className="name-workTitle">
          <div>
            <p className="my-name">Wills</p>
          </div>
          <p className="workTitle">Fullstack Developer</p>
        </div>
        <img
          src="https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-kitten-standing-atop-wall-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="my-details">
          <a href="linkdedin">
            <i className="fa-brands fa-linkedin "></i>
          </a>
          <a href="linkdedin" className="mx-3">
            <i className="fa-brands fa-github "></i>
          </a>
          <p>Lagos, Nigeria</p>
        </div>

        <div className="rights">
          <p>Wills 2023. All right reserved</p>
        </div>

        <div></div>

        <button className="btn btn-success rounded-pill ">
          <FaEnvelope className="mx-2" />
          HIRE ME!
        </button>
      </div>
    </div>
  );
};

export default PersonalCard;
