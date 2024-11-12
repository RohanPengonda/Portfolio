// import React from 'react'
import { useState } from "react";
import "./Navbar.css";
//import underline from "../../assets/underline.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  return (
    <div className="navbar">
      <img src="" alt="" />
      <u1 className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setmenu("home")}>Home</p>
          </AnchorLink>
          {/* {menu === "home" ? <img src={underline} alt="" /> : <></>} */}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setmenu("about")}>About Me</p>
          </AnchorLink>
          {/* {menu === "about" ? <img src={underline} alt="" /> : <></>} */}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setmenu("projects")}>Projects</p>
          </AnchorLink>
          {/* {menu === "projects" ? <img src={underline} alt="" /> : <></>} */}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setmenu("work")}>MyWork</p>
          </AnchorLink>
          {/* {menu === "work" ? <img src={underline} alt="" /> : <></>} */}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setmenu("contact")}>Contact</p>
          </AnchorLink>
          {/* {menu === "contact" ? <img src={underline} alt="" /> : <></>} */}
        </li>
      </u1>

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
