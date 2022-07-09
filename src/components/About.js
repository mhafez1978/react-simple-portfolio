import React from 'react';
import aboutImg from './images/startup.svg';
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
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <div className="animated animated-text">
                <div className="mr-2">
                  <h1 id="opening">
                    Building Websites with a Heart, Soul, and a Mind.
                  </h1>
                </div>
                <div
                  className="animated-info"
                  style={{ marginTop: '-10px', marginBottom: '40px' }}
                >
                  <span
                    className="animated-item"
                    style={{
                      fontSize: '30px',
                      minWidth: '350%',
                      color: 'purple',
                    }}
                  >
                    I am a Full Stack Web Developer
                  </span>
                  <span
                    className="animated-item"
                    style={{
                      fontSize: '30px',
                      minWidth: '350%',
                      color: 'purple',
                    }}
                  >
                    I am an Amazon Certified Cloud Practitioner
                  </span>
                  <span
                    className="animated-item"
                    style={{
                      fontSize: '30px',
                      minWidth: '350%',
                      color: 'purple',
                    }}
                  >
                    I am a Microsoft Certified Systems Engineer
                  </span>
                </div>
              </div>

              <p style={{ width: '90%', fontSize: '16px', marginTop: '20px' }}>
                Hello, it's nice to see you. My name is Mohamed Hafez, and I am
                a Full Stack Web Developer based in Lowell, Massachussetts,
                United States. If you like what you see please connect with me
                on social scene, email me a positive note, or send me a message
                using the contact form below.
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
                <a href="#contact" className="grey-btn">
                  Get a free quote
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img src={aboutImg} className="img-fluid" alt="about-pic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
