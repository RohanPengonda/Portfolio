// import React from "react";
import "./MyWork.css";
import arrow from "../../assets/arrow_icon.svg";
import underline from "../../assets/underline.png";

import projects_data from "../../assets/projects_data";
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={underline} alt="ltst_work" />
      </div>
      <div className="mywork-container">
        {projects_data.map((work, index) => {
          return <img key={index} src="" alt="mywork_img" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow} alt="arrow_icon" />
      </div>
    </div>
  );
};

export default MyWork;
