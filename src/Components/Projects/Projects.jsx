// import React from 'react'
import "./Projects.css";
import projects_data from "../../assets/projects_data";
const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>My Projects</h1>
        <img src="" alt="Projects" />
      </div>
      <div className="projects-container">
        {projects_data.map((project, index) => {
          return (
            <div key={index} className="projects-format">
              <h2>{project.p_no}</h2>
              <h1>{project.p_name}</h1>
              <h2>{project.p_skills}</h2>
              <p>{project.p_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src="" alt="arrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
