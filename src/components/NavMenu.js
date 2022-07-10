import React, { useState } from 'react';
import '../styles/custom.css';

const resume =
  'https://docs.google.com/document/d/1-dD4L1qhkkYaoa3wrLESgSFDmOPItZ4K/edit?usp=sharing&ouid=106440158359286859061&rtpof=true&sd=true';
const NavMenu = () => {
  const [theme, setTheme] = useState('light');

  const dark = () => {
    document.body.style.background = '#222';
    document.getElementById('opening').style.color = '#fff';
    document.getElementById('opening2').style.color = '#fff';
    document.getElementById('project-heading').style.color = '#fff';
    document.getElementById('aboutme').style.color = '#fff';
    document.getElementById('experiences').style.color = '#fff';
    document.getElementById('education').style.color = '#fff';
    document.getElementById('kartx').style.color = '#fff';
    document.getElementById('kartx2').style.color = '#fff';
    document.getElementById('kartx3').style.color = '#fff';
    document.getElementById('kartx4').style.color = '#fff';
    document.getElementById('nens').style.color = '#fff';
    document.getElementById('nens2').style.color = '#fff';
    document.getElementById('nens3').style.color = '#fff';
    document.getElementById('nens4').style.color = '#fff';
    document.getElementById('onedigital').style.color = '#fff';
    document.getElementById('onedigital2').style.color = '#fff';
    document.getElementById('onedigital3').style.color = '#fff';
    document.getElementById('onedigital4').style.color = '#fff';
    document.getElementById('microsoft').style.color = '#fff';
    document.getElementById('microsoft2').style.color = '#fff';
    document.getElementById('microsoft3').style.color = '#fff';
    document.getElementById('microsoft4').style.color = '#fff';
    document.getElementById('fstack').style.color = '#fff';
    document.getElementById('fstack2').style.color = '#fff';
    document.getElementById('fstack3').style.color = '#fff';
    document.getElementById('fstack4').style.color = '#fff';
    document.getElementById('cisco').style.color = '#fff';
    document.getElementById('cisco2').style.color = '#fff';
    document.getElementById('cisco3').style.color = '#fff';
    document.getElementById('cisco4').style.color = '#fff';
    document.getElementById('amazon').style.color = '#fff';
    document.getElementById('amazon2').style.color = '#fff';
    document.getElementById('amazon3').style.color = '#fff';
    document.getElementById('amazon4').style.color = '#fff';
    document.getElementById('mcse').style.color = '#fff';
    document.getElementById('mcse2').style.color = '#fff';
    document.getElementById('mcse3').style.color = '#fff';
    document.getElementById('mcse4').style.color = '#fff';
    document.getElementById('mode').style.color = '#fff';
    document.getElementById('where').style.color = '#fff';
    document.getElementById('add1').style.color = '#fff';
    document.getElementById('add2').style.color = '#fff';
    document.getElementById('addtitle').style.color = '#fff';
    document.getElementById('addphone').style.color = '#fff';
    document.getElementById('contacttitle').style.color = '#fff';
    document.getElementById('social').style.color = '#fff';
    document.getElementById('giphy').style.color = '#fff';
    document.getElementById('mohamed').style.color = '#fff';
    document.getElementById('copy').style.color = '#fff';
    document.getElementById('copyright').style.color = '#fff';
  };
  const light = () => {
    document.body.style.background = '#fff';
  };

  const changeTheme = () => {
    (theme === 'light' ? setTheme(dark) : setTheme(light)) ||
      (theme === 'dark' ? setTheme(light) : setTheme(dark));
  };

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: 'aliceblue', height: '45px' }}
    >
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
              <a href="#projects" className="nav-link">
                <span data-hover="Projects">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                target="_blank"
                rel="noreferrer"
                href={resume}
                className="nav-link"
              >
                <span id="resume" data-hover="Resume">
                  Resume
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                <span data-hover="Contact">Contact me</span>
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
