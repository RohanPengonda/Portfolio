// import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src="" alt="ProfileIMG" />
      <h1>
        <span> I`m Rohan Pengonda,</span>
        <br /> Full Stack Developer.
      </h1>
      <p>
        I recently graduated with a degree in Computer Engineering from N.B
        {/* Navale Sinhgad College of Engineering, Solapur. I have hands-on
        experience in web development from my internship at Bodhi Technology,
        where I worked with technologies like React.js, Python, front-end
        design, and database management. Currently, I am employed as a GAT
        Engineer at Hindustan Petroleum Corporation Limited (HPCL), where my
        responsibilities include data analysis and visualization using Python
        libraries such as NumPy, Pandas, and Matplotlib, along with Excel. */}
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
