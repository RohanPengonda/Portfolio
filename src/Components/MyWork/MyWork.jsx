// import React from "react";
import "./MyWork.css";
import projects_data from "../../assets/projects_data";
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="work-title">
        <h1>My Latest Work</h1>
        <img src="" alt="ltst_work" />
      </div>
      <div className="mywork-container">
        {projects_data.map((work, index) => {
          return <img key={index} src="" alt="mywork_img" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src="" alt="arrow_icon" />
      </div>
    </div>
  );
};

export default MyWork;
