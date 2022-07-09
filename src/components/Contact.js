import React, { useState } from "react";
import "../styles/custom.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.647445330423!2d-71.3096620843126!3d42.64763347916865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a439003222e9%3A0x7b606332a3f66544!2s141%20John%20St%2C%20Lowell%2C%20MA%2001852!5e0!3m2!1sen!2sus!4v1657333668318!5m2!1sen!2sus";
const instagram = "https://www.instagram.com/mofez1978";
const youtube = "http://youtube.com/movewebdesign";
const facebook = "https://www.facebook.com/profile.php?id=100025229736186";
const gify = "https://giphy.com/embed/l0HekX1fg8NEa2eVG";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <section id="contact" className="contact py-5" data-aos="slide-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-md-4">
            <div className="contact-form">
              <h2 className="mb-4">
                Interested in working together? Let's talk
              </h2>

              <form>
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
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={handleMessageChange}
                    ></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5">
                    <input
                      type="submit"
                      className="form-control submit-btn"
                      value="Send Button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <div
              style={{
                width: "100%",
                height: "495px",
                border: "0",
                className: "custom text-center",
              }}
            >
              <iframe
                id="giphy"
                src={gify}
                referrerpolicy="no-referrer-when-downgrade"
                loading="lazy"
                width="270px"
                height="455px"
                className="mr-3"
                style={{ border: "0" }}
              ></iframe>
              Attrib:
              <a href="https://gify.com" style={{ color: "purple" }}>
                Giphy
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 col-md-12  mt-5">
            <h3>Where To Find Me</h3>
            <i style={{ color: "purple" }}>Mailing Address</i>
            <address>141 JOHN ST. LOWELL, MA 01852</address>
            <i style={{ color: "purple" }}>Phone</i>
            <address>+1 978 888 7688</address>
            <div className="google-map w-100">
              <iframe
                title="location"
                src={location}
                width="400px"
                height="280px"
                style={{ border: "0" }}
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
