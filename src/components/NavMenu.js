import React, { useState } from "react";

const NavMenu = () => {
  const [theme, setTheme] = useState("light");

  const dark = () => {
    document.body.style.background = "#222";
    // document.getElementById("logo").style.color = "#fff";
    // document.getElementById("about").style.color = "#fff";
    // document.getElementById("projects").style.color = "#fff";
    // document.getElementById("resume").style.color = "#fff";
    // document.getElementById("contact").style.color = "#fff";
    // document.getElementById("greeting").style.color = "#fff";
    // document.getElementById("opening").style.color = "#fff";
    // document.getElementById("project-heading").style.color = "#fff";
    // document.getElementById("experiences").style.color = "#fff";
    // document.getElementById("education").style.color = "#fff";
    // document.getElementById("mode").style.color = "#fff";
  };
  const light = () => {
    document.body.style.background = "#fff";
    // document.getElementById("logo").style.color = "#222";
    // document.getElementById("about").style.color = "#222";
    // document.getElementById("projects").style.color = "#222";
    // document.getElementById("resume").style.color = "#222";
    // document.getElementById("contact").style.color = "#222";
    // document.getElementById("greeting").style.color = "#222";
    // document.getElementById("opening").style.color = "#222";
    // document.getElementById("project-heading").style.color = "#222";
    // document.getElementById("experiences").style.color = "#222";
    // document.getElementById("education").style.color = "#222";
    // document.getElementById("mode").style.color = "#222";
  };

  const changeTheme = () => {
    (theme === "light" ? setTheme(dark) : setTheme(light)) ||
      (theme === "dark" ? setTheme(light) : setTheme(dark));
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <a id="logo" className="navbar-brand" href="index.html">
          <i className="uil uil-user"></i> Mohamed Hafez
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                <span id="about" data-hover="About">
                  About
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">
                <span id="projects" data-hover="Projects">
                  Projects
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                <span id="resume" data-hover="Resume">
                  Resume
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span id="contact" data-hover="Contact">
                  Contact
                </span>
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-lg-auto">
            <div className="ml-lg-4">
              <div className="color-mode d-lg-flex justify-content-center align-items-center">
                <i className="color-mode-icon"></i>
                <span id="mode" onClick={changeTheme}>
                  Color mode
                </span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavMenu;
