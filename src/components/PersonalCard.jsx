import React from "react";
import "../components/personcalCard.css";
// import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import myImage from "./OWP_0525.jpg";
import { Link } from "react-router-dom";

const PersonalCard = () => {
  const image = myImage;
  return (
    <div className="personal-card">
      <div className="personalCard-wrapper">
        <div className="name-workTitle">
          <p className="my-name-card text-center">Wills Odali</p>
          <p className="workTitle text-center">Fullstack Developer</p>
        </div>
        <img src={image} alt="" />
        <div className="my-details">
          <Link
            className="mx-2"
            to={"https://github.com/sirwills"}
            target="_blank"
          >
            {" "}
            <i className="fa-brands fa-github "></i>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/wills-odali-b2021b265/"}
            target="_blank"
          >
            {" "}
            <i className="fa-brands fa-linkedin "></i>
          </Link>
          <p>Lagos, Nigeria</p>
        </div>

        <div className="rights">
          <p>Wills 2023. All right reserved</p>
        </div>

        <Link to={"/contact"} className="w-100">
          <button className="btn btn-color rounded-pill w-100 ">
            <FaEnvelope className="mx-2" />
            HIRE ME!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalCard;
