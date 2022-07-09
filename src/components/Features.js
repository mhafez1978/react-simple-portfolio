import "../styles/custom.css";

const Features = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row" data-aos="slide-up">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4" id="experiences">
              Career Progress
            </h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Systems Support Engineer.</span>
                    <small style={{ color: "purple" }}>
                      Karuna Therapeutics Inc.
                    </small>
                    <small style={{ color: "purple" }}>
                      Boston, Massachussetts.
                    </small>
                  </h3>
                  <p>
                    Complete hybrid network infratsructure and end user support.
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2020</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Tier 2 Field Support Engineer.</span>
                    <small style={{ color: "purple" }}>
                      New England Network Solutions.
                    </small>
                    <small style={{ color: "purple" }}>
                      Lowell, Massachussetts.
                    </small>
                  </h3>
                  <p>
                    As a managed service provider filed engineer, we visit
                    businesses in distress and resolve any IT challanges a
                    customer has.
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2018</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Traveling Infratsructure Engineer.</span>
                    <small style={{ color: "purple" }}>
                      Digital Insurance Inc.
                    </small>
                    <small style={{ color: "purple" }}>Atlanta, Giorgia.</small>
                  </h3>
                  <p>
                    Traveling nation wide on a mission to migrate existing
                    acquired exiting insurance business networks infratsructure,
                    data, processes, customers and people to One Digital head
                    quarters data center in Atlanta Giorgia..
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2016</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Tier 3 Escalation Engineer.</span>
                    <br />
                    <small style={{ color: "purple" }}>Microsoft.</small>
                    <small style={{ color: "purple" }}>
                      Charlotte, North Carolina.
                    </small>
                  </h3>
                  <p>
                    As a Microsoft TekSystems Exchange Escalation Contractor I
                    engage with premiere customers to resolve any email related
                    issues including mailflow, mailbox security breaches,
                    retention, archiving, and e-discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2" id="education">
              Industry Certifications
            </h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Full Stack Web Development</span>
                    <small style={{ color: "purple" }}>
                      Framingham University
                    </small>
                    <small style={{ color: "purple" }}>
                      Framingham, Massachussetss.
                    </small>
                  </h3>
                  <p>
                    Learned how to use Node, Express, React, Sequelize-ORM,
                    MongoDB, MySQL to create functional full stack app with a
                    backend server serving API's and a front end consuming the
                    data and presenting it to viewer.
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2015</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Cisco Meraki Network Associate</span>
                    <small style={{ color: "purple" }}>Cisco</small>
                    <small style={{ color: "purple" }}>
                      Online Certificate
                    </small>
                  </h3>
                  <p>
                    Setup, Install, Configure, and Support Cisco Meraki network
                    using Cisco Meraki gear ie.
                  </p>
                </div>
              </div>

              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2019</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Amazon Certified Cloud Practitioner.</span>
                    <br />
                    <small style={{ color: "purple" }}>
                      AWS Amazon Cloud Services.
                    </small>
                    <small style={{ color: "purple" }}>
                      Online Certificate.
                    </small>
                  </h3>
                  <p>
                    Deploy a complete scalable solutions on Amazon Cloud
                    infratsructure. Utilize advanced features like auto-scaling,
                    load balancing, DNS management, database management, and
                    Identity management.
                  </p>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2000</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Microsoft Certified Systems Engineer.</span>
                    <small style={{ color: "purple" }}>Microsoft.</small>
                    <small style={{ color: "purple" }}>
                      Online Certificate.
                    </small>
                  </h3>
                  <p>
                    Design, Build, Deploy and Support Windows Enterprise
                    Infrastructure Network Systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
