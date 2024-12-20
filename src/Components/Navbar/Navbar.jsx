// import React from 'react'
import { useRef, useState } from "react";
import "./Navbar.css";
import underline from "../../assets/underline.png";
import logo from "../../assets/logo.svg";

import mopen from "../../assets/menu_open.svg";
import mclose from "../../assets/menu_close.svg";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setmenu] = useState("home");

  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      {/* <h1 className="">Rohan</h1> */}
      <img
        src={mopen}
        onClick={openMenu}
        alt="menu-open"
        className="nav-mob-open"
      />
      <u1 ref={menuRef} className="nav-menu">
        <img
          src={mclose}
          onClick={closeMenu}
          alt="menu_cls"
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setmenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} width="80" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setmenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} width="80" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setmenu("projects")}>Projects</p>
          </AnchorLink>
          {menu === "projects" ? (
            <img src={underline} width="80" alt="" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setmenu("work")}>MyWork</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} width="80" alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setmenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <img src={underline} width="80" alt="" />
          ) : (
            <></>
          )}
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
