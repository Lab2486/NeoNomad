import React from "react";
import "./Home.css";
import HomePoster from "../HomePoster/HomePoster";
import CategoryImgContainer from "../CategoryImgContainer/CategoryImgContainer";

function Home() {
  return (
    <div className="homeContainer">
      <div className="home">
        <div className="homePosterCont">
          <HomePoster />
        </div>
        <div className="homeSection">
          <CategoryImgContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
