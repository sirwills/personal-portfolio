import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return <div className="portfolio d-flex justify-content-around">
    <Link className="project-card-link" to ='https://weather-deck.vercel.app/' target="_blank">
    <div class="card card-styling shadow" >
      <img src="./weather-app.png" class="card-img-top card-image" alt="..."/>
      <div class="card-body">
      <h5 class="card-title">Weather-Check</h5>
      <p class="card-text app-description ">Determine weatther condition in your location and more</p>
      
    </div>
    
</div>
</Link>


  </div>;
};

export default Portfolio;
