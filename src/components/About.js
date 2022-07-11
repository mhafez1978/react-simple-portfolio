import React from 'react';
import Typed from 'react-typed';
import aboutImg from '../components/images/framed-self.png';
import '../styles/custom.css';

const resume =
  'https://docs.google.com/document/d/1-dD4L1qhkkYaoa3wrLESgSFDmOPItZ4K/edit?usp=sharing&ouid=106440158359286859061&rtpof=true&sd=true';

const About = () => {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row" data-aos="slide-up">
          <div className="col-lg-7 col-md-12 col-sm-12 d-flex align-items-center">
            <div className="about-text">
              <div className="animated animated-text">
                <div className="mr-2">
                  <h1 id="opening">
                    {/* Robust Data Driven Business Web &amp; Mobile Applications. */}
                    Building Robust, Responsive, and Engaging Web Apps.
                  </h1>
                  <h3 id="opening2" style={{ marginBottom: '25px' }}>
                    A little bit more info about myself, ...
                  </h3>
                  <Typed
                    strings={[
                      'I am A Full Stack Web Developer',
                      'I am An Amazon Certified Cloud Practitioner',
                      'I am A Microsoft Certified Systems Engineer',
                    ]}
                    typeSpeed={40}
                    backSpeed={150}
                    attr="placeholder"
                    loop
                  >
                    <input type="text" className="typedspan" />
                  </Typed>
                </div>
              </div>
              <p
                id="aboutme"
                style={{
                  width: '90%',
                  fontSize: '16px',
                  marginTop: '25px',
                  marginBottom: '50px',
                }}
              >
                Hello, it's so nice of you to drop by. My name is Mohamed Hafez.
                I am an aspiring Full Stack Software Developer. If you're
                looking to build a website or a mobile app focusing on a mixture
                of engaging user content, functionality, scalability, and
                performace you're at the right place.
              </p>

              <div className="custom-btn-group mt-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={resume}
                  className="purple-btn mr-3"
                >
                  <i className="uil uil-file-alt"></i> Download A Copy of My
                  Resume
                </a>
                <a href="#projects" className="grey-btn">
                  Review Completed Projects
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 col-md-12 col-sm-12"
            style={{ paddingTop: '7%' }}
          >
            <div className="about-image svg" style={{ marginBottom: '25px' }}>
              <img src={aboutImg} className="img-fluid" alt="about-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
