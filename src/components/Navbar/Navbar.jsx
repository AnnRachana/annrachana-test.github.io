import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import logowhite from "../images/logowhite.png";
import logoblack from "../images/logoblack.png"; // Change this to your black logo path
import "./Navbar.css";
import "./NavScroll.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState(logowhite); // State for the logo image

  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  const closeNavbar = () => {
    setNavToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 700; // Change 50 to your desired scroll position
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
        // Change the logo based on scroll
        if (isScrolled) {
          setLogo(logoblack);
        } else {
          setLogo(logowhite);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container ">
        <div className="navbar-content">
          <div className="brand-and-toggler">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="logo" /> {/* Use the dynamic logo */}
              <span>Ann Rachana</span>
            </a>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}>
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}>
            <div className="navbar-collapse-content">
              <ul className="navbar-nav">
                <li className="text-white">
                  <a href="#home" onClick={closeNavbar} className="button-txt">
                    <i className="fa-solid fa-house"></i>Home
                  </a>
                </li>

                <li className="text-white">
                  <a href="#about" onClick={closeNavbar} className="button-txt">
                    <i className="fa-solid fa-user"></i>About
                  </a>
                </li>

                <li className="text-white">
                  <a href="/" onClick={closeNavbar} className="button-txt">
                    <i className="fa-solid fa-code-branch"></i>Skills
                  </a>
                </li>
                <li className="text-white">
                  <a href="/" onClick={closeNavbar} className="button-txt">
                    <i className="fa-solid fa-code"></i>Projects
                  </a>
                </li>
                <li className="text-white">
                  <a href="/" onClick={closeNavbar} className="button-txt">
                    <i className="fa-solid fa-address-card"></i>Contact
                  </a>
                </li>
              </ul>

              <ul className="navbar-social ">
                <li className="text-white">
                  <a href="/" className="icon-nav">
                    <FaGithub />
                  </a>
                </li>
                <li className="text-white">
                  <a href="/" className="icon-nav">
                    <FaFacebook />
                  </a>
                </li>
                <li className="text-white">
                  <a href="/" className="icon-nav">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
              <div className="navbar-btns"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
