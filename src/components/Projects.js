import "../styles/custom.css";

const Projects = (props) => {
  const company = props.company;
  const webUrl = props.webUrl;
  const description = props.description;
  const projectImg = props.img;

  return (
    <section className="project py-5" id="project">
      <div className="item">
        <div className="project-info mr-4">
          <div style={{ border: "1px solid black" }} className="frame">
            <img
              src={projectImg}
              className="img-fluid"
              alt="project-pic"
              width={"100%"}
              height={"100px"}
            />
            <div className="details">
              <div className="row">
                <div
                  className="col"
                  style={{
                    textAlign: "center",
                    paddingTop: "10%",
                    color: "#fff",
                  }}
                >
                  <h3>{company}</h3>
                  <a href={webUrl} target="_blank">
                    {webUrl}
                  </a>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
