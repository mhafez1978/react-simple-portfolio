import React from "react";
import aboutImg from "./images/startup.svg";

const About = () => {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <div className="animated animated-text">
                <div className="mr-2">
                  <h1 id="opening">Some of the titles I hold</h1>
                </div>
                <div
                  className="animated-info"
                  style={{ marginTop: "-10px", marginBottom: "40px" }}
                >
                  <span
                    className="animated-item"
                    style={{ fontSize: "30px", minWidth: "300%" }}
                  >
                    Full Stack Web Developer
                  </span>
                  <span
                    className="animated-item"
                    style={{ fontSize: "30px", minWidth: "300%" }}
                  >
                    Amazon Certified Cloud Practitioner
                  </span>
                  <span
                    className="animated-item"
                    style={{ fontSize: "30px", minWidth: "300%" }}
                  >
                    Microsoft Certified Systems Engineer
                  </span>
                </div>
              </div>

              <p style={{ width: "90%", fontSize: "16px", marginTop: "20px" }}>
                I love building things that serves a purpose, resolve problems,
                or leave a positive impact on others.
              </p>

              <div className="custom-btn-group mt-4">
                <a href="#" className="btn mr-lg-2 custom-btn">
                  <i className="uil uil-file-alt"></i> Download A Copy of My
                  Resume
                </a>
                <a
                  href="#contact"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Get a free quote
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img src={aboutImg} className="img-fluid" alt="svg image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
