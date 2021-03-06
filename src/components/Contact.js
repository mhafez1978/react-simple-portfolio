import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineCheckCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import '../styles/custom.css';
var Recaptcha = require('react-recaptcha');

const location =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.647445330423!2d-71.3096620843126!3d42.64763347916865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a439003222e9%3A0x7b606332a3f66544!2s141%20John%20St%2C%20Lowell%2C%20MA%2001852!5e0!3m2!1sen!2sus!4v1657333668318!5m2!1sen!2sus';

const instagram = 'https://www.instagram.com/mofez1978';
const youtube = 'http://youtube.com/movewebdesign';
const facebook = 'https://www.facebook.com/profile.php?id=100025229736186';
const gify = 'https://giphy.com/embed/l0HekX1fg8NEa2eVG';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  console.log({ name, email, message });

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = { name, email, message };
    emailjs
      .send(
        'service_wlsr15g',
        'template_n21el5l',
        templateParams,
        'OttUrdHzbARGwXV4y'
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(true);
          document.getElementById('emailStatusMessage').style.display = 'block';
        },
        (error) => {
          console.log(error.text);
          setStatus(false);
          document.getElementById('emailStatusMessage').style.display = 'block';
        }
      );
  };

  const msg =
    status === true ? (
      <div className="alert alert-success" role="alert">
        <span>
          <AiOutlineCheckCircle /> Message Sent OK
        </span>
      </div>
    ) : (
      <div className="alert alert-danger" role="alert">
        <span>
          <AiOutlineMinusCircle /> So sorry, but your message was not sent
        </span>
      </div>
    );

  const handleReset = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="contact py-5" data-aos="slide-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-md-4">
            <div className="contact-form">
              <h2 id="contacttitle" className="mb-4">
                Interested in working together? Let's talk
              </h2>
              <div className="row">
                <div
                  id="social"
                  style={{
                    paddingLeft: '20px',
                    fontSize: '2rem',
                    color: 'purple',
                  }}
                >
                  <a
                    className="mr-2"
                    href={instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineInstagram fill="purple" />
                  </a>
                  <a
                    className="mr-2"
                    href={youtube}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineYoutube fill="purple" />
                  </a>
                  <a
                    className="mr-2"
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineFacebook fill="purple" />
                  </a>
                  <a
                    className="mr-2"
                    href={facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineGithub fill="purple" />
                  </a>
                  <a href={facebook} target="_blank" rel="noreferrer">
                    <AiOutlineTwitter fill="purple" />
                  </a>
                </div>
              </div>
              <form onSubmit={handleSubmit} action="?" method="POST">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="enter name"
                      id="name"
                      required
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="enter email"
                      id="email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      type="text"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={handleMessageChange}
                    ></textarea>
                  </div>

                  <div className="container">
                    <div className="row" style={{ paddingLeft: '10%' }}>
                      <br />
                      <Recaptcha sitekey="6LfBy9ogAAAAAEiOBui0A45wibxClcXXeQTj-M9d" />
                      <br />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          id="send-btn"
                          type="submit"
                          className="form-control submit-btn"
                          value="Send"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          id="reset-btn"
                          onClick={handleReset}
                          className="form-control reset-btn"
                          type="reset"
                          value="Reset"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div id="emailStatusMessage">{msg}</div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div
              style={{
                width: '100%',
                height: '495px',
                border: '0',
                className: 'custom text-center',
              }}
            >
              <iframe
                title="giphy"
                src={gify}
                referrerpolicy="no-referrer-when-downgrade"
                loading="lazy"
                width="270px"
                height="500px"
                className="mr-3 mt-5"
                style={{ border: '0' }}
              ></iframe>
              <center>
                Image Attribute:
                <a
                  id="giphy"
                  href="https://giphy.com"
                  style={{ color: 'purple' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  Giphy
                </a>
              </center>
            </div>
          </div>
          <div
            className="col-lg-5 col-sm-12 col-md-12"
            style={{ paddingLeft: '40px', paddingTop: '8%' }}
          >
            <h3 id="where">Where To Find Me</h3>
            <i id="addtitle" style={{ color: 'purple' }}>
              Mailing Address
            </i>
            <address id="add1">141 JOHN ST. LOWELL, MA 01852</address>
            <i id="addphone" style={{ color: 'purple' }}>
              Phone
            </i>
            <address id="add2">+1 978 888 7688</address>
            <div className="google-map w-100">
              <iframe
                title="location"
                src={location}
                width="400px"
                height="260px"
                style={{ border: '0' }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
