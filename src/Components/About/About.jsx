// import React from "react";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src="" alt="aboutimg" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="" alt="img_left" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>sdfjbvdjfbfjhsvdjfvcjdvfshfvfcjdsfjvbc</p>
            <p>kskjdjbfcjvdsjbcvdsvcvdsvfchdsjvcjdfsjbvcjhds</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML,CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "35%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>SQL</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>10+</h1>
          <p>Years of Expierence</p>
        </div>
        <hr />

        <div className="about-achievment">
          <h1>90+</h1>
          <p>Codes</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>20+</h1>
          <p>Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
