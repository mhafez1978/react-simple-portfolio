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
            <div class="details">
              <div className="row">
                <div className="col" style={{ textAlign: "left" }}>
                  <ul>
                    <li>{company}</li>
                    <li>{webUrl}</li>
                    <li>{description}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div
            style={{ width: "100%", height: "200px", disply: "block" }}
            className="row"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
