import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return <div className="portfolio d-flex justify-content-around">
    <div class="card card-styling shadow" >
      <Link to ='https://weather-deck.vercel.app/' target="_blank"><img src="./weather-app.png" class="card-img-top card-image" alt="..."/></Link>
      <div class="card-body">
      <h5 class="card-title">Weather-Check</h5>
      <p class="card-text app-description ">Determine weatther condition in your location and more</p>
      
    </div>
</div>

{/* <div class="card card-styling shadow" >
      <Link to ='https://weather-deck.vercel.app/' target="_blank"><img src="./weather-app.png" class="card-img-top card-image" alt="..."/></Link>
      <div class="card-body">
      <h5 class="card-title">Weather-Check</h5>
      <p class="card-text fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
</div> */}

{/* <div class="card card-styling shadow" >
      <Link to ='https://weather-deck.vercel.app/' target="_blank"><img src="./weather-app.png" class="card-img-top card-image" alt="..."/></Link>
      <div class="card-body">
      <h5 class="card-title">Weather-Check</h5>
      <p class="card-text fs-6">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
</div> */}


  </div>;
};

export default Portfolio;
