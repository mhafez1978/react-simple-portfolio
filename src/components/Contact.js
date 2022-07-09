const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.647445330423!2d-71.3096620843126!3d42.64763347916865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3a439003222e9%3A0x7b606332a3f66544!2s141%20John%20St%2C%20Lowell%2C%20MA%2001852!5e0!3m2!1sen!2sus!4v1657333668318!5m2!1sen!2sus";

const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src={location}
                width="400"
                height="300"
                style={{ border: "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Stay Connected !</h3>
                <p className="footer-text mb-0">Phone: +1 978 888 7688</p>
                <p>
                  <a href="mailto:mhafez@movewebdesign.com">Send me an email</a>
                </p>
              </div>

              <ul className="social-links">
                <li>
                  <a
                    href="/"
                    className="uil uil-dribbble"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Dribbble"
                  ></a>
                </li>
                <li>
                  <a
                    href="/"
                    className="uil uil-instagram"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Instagram"
                  ></a>
                </li>
                <li>
                  <a
                    href="/"
                    className="uil uil-youtube"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Youtube"
                  ></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">
                Interested in working together? Let's talk
              </h2>

              <form action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
