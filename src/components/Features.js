import '../styles/custom.css';

const Features = () => {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row" data-aos="slide-up">
          <div className="col-lg-6 col-12">
            <h2 id="experiences" className="mb-4">
              Career Progress
            </h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span id="kartx">Systems Support Engineer.</span>
                    <br />
                    <small id="kartx2" style={{ color: 'purple' }}>
                      Karuna Therapeutics Inc.
                    </small>
                    <small id="kartx3" style={{ color: 'purple' }}>
                      Boston, Massachussetts.
                    </small>
                  </h3>
                  <p id="kartx4">
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
                    <span id="nens">Tier 2 Field Support Engineer.</span>
                    <br />
                    <small id="nens2" style={{ color: 'purple' }}>
                      New England Network Solutions.
                    </small>
                    <small id="nens3" style={{ color: 'purple' }}>
                      Lowell, Massachussetts.
                    </small>
                  </h3>
                  <p id="nens4">
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
                    <span id="onedigital">
                      Traveling Infratsructure Engineer.
                    </span>
                    <br />
                    <small id="onedigital2" style={{ color: 'purple' }}>
                      Digital Insurance Inc.
                    </small>
                    <small id="onedigital3" style={{ color: 'purple' }}>
                      Atlanta, Giorgia.
                    </small>
                  </h3>
                  <p id="onedigital4">
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
                    <span id="microsoft">Tier 3 Escalation Engineer.</span>
                    <br />
                    <small id="microsoft2" style={{ color: 'purple' }}>
                      Microsoft.
                    </small>
                    <small id="microsoft3" style={{ color: 'purple' }}>
                      Charlotte, North Carolina.
                    </small>
                  </h3>
                  <p id="microsoft4">
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
            <h2 id="education" className="mb-4 mobile-mt-2">
              Industry Certifications
            </h2>

            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span id="fstack">Full Stack Web Development</span>
                    <br />
                    <small id="fstack2" style={{ color: 'purple' }}>
                      Framingham University
                    </small>
                    <small id="fstack3" style={{ color: 'purple' }}>
                      Framingham, Massachussetss.
                    </small>
                  </h3>
                  <p id="fstack4">
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
                    <span id="cisco">Cisco Meraki Network Associate</span>
                    <br />
                    <small id="cisco2" style={{ color: 'purple' }}>
                      Cisco
                    </small>
                    <small id="cisco3" style={{ color: 'purple' }}>
                      Online Certificate
                    </small>
                  </h3>
                  <p id="cisco4">
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
                    <span id="amazon">
                      Amazon Certified Cloud Practitioner.
                    </span>
                    <br />
                    <small id="amazon2" style={{ color: 'purple' }}>
                      AWS Amazon Cloud Services.
                    </small>
                    <small id="amazon3" style={{ color: 'purple' }}>
                      Online Certificate.
                    </small>
                  </h3>
                  <p id="amazon4">
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
                    <span id="mcse">Microsoft Certified Systems Engineer.</span>
                    <br />
                    <small id="mcse2" style={{ color: 'purple' }}>
                      Microsoft.
                    </small>
                    <small id="mcse3" style={{ color: 'purple' }}>
                      Online Certificate.
                    </small>
                  </h3>
                  <p id="mcse4">
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
