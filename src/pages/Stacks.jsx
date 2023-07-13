import React from "react";
import StackCard from "../components/StackCard";

import "aos/dist/aos.css";

const Stacks = () => {
  return (
    <div className="stacks">
      <h1 className="text-center text-success"> My Stack</h1>

      <div className="container">

      <StackCard
          image={"./reacct.png"}
          title={"React Js"}
          
        />{" "}

      <StackCard 
        image={"./css33.png"} 
        title={"CSS"}  />

      <StackCard
          image={"./bootstrap.png"}
          title={"Bootstrap"}
          
        />{" "}

      </div>

      
      <div className="container ">

      <StackCard
          image={"./express-js.png"}
          title={"Express Js"}
          p
        />

        <StackCard
          image={"./node-js.png"}
          title={"Node Js"}
          
        />{" "}
        

        

<StackCard
          image={"./mongodb-png.webp"}
          title={"MongoDb"}
          
        />
      </div>
    </div>
  );
};

export default Stacks;
