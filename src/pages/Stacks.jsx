import React from "react";
import StackCard from "../components/StackCard";

import "aos/dist/aos.css";

const Stacks = () => {
  return (
    <div className="stacks">
      <h1 className="text-center text-success"> My Stack</h1>

      <div className="container">
        <StackCard
          image={"./mongodb-png.webp"}
          title={"MongoDb"}
          
        />
        <StackCard
          image={"./express-js.png"}
          title={"Express Js"}
          p
        />
        <StackCard
          image={"./reacct.png"}
          title={"React Js"}
          
        />{" "}
      </div>
      <div className="container ">
        <StackCard
          image={"./node-js.png"}
          title={"Node Js"}
          
        />{" "}
        <StackCard image={"./css33.png"} title={"CSS"}  />
        <StackCard
          image={"./bootstrap.svg.png"}
          title={"Bootsrap"}
          
        />{" "}
      </div>
    </div>
  );
};

export default Stacks;
