import React from "react";
import StackCard from "../components/StackCard";

import "aos/dist/aos.css";

const Stacks = () => {
  return (
    <div className="stacks">
      <h1 className="text-center text-white"> My Stack</h1>

      <div className="container">
        <StackCard
          image={"./mongodb-png.webp"}
          title={"MongoDb"}
          percentage="60%"
        />
        <StackCard
          image={"./express-js.png"}
          title={"Express Js"}
          percentage={"70%"}
        />
        <StackCard
          image={"./reacct.png"}
          title={"React Js"}
          percentage={"90%"}
        />{" "}
      </div>
      <div className="container ">
        <StackCard
          image={"./node-js.png"}
          title={"Node Js"}
          percentage={"70%"}
        />{" "}
        <StackCard image={"./css33.png"} title={"CSS"} percentage={"70%"} />
        <StackCard
          image={"./bootstrap.svg.png"}
          title={"Bootsrap"}
          percentage={"80%"}
        />{" "}
      </div>
    </div>
  );
};

export default Stacks;
