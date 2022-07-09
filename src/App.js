import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import projectImg01 from "./components/images/project/caw.png";
import projectImg02 from "./components/images/project/cr.png";
import projectImg03 from "./components/images/project/cbd.png";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function App() {
  AOS.init();
  return (
    <>
      <NavMenu />
      <About />
      <div className="mx-auto col-lg-12 text-center">
        <div className="col-lg-8 mx-auto mb-5">
          <h2 id="project-heading">
            Please check out some of my completed projects
          </h2>
        </div>
      </div>
      <div className="container">
        <div className="row" data-aos="slide-up">
          <div className="col-lg-4">
            <Projects
              img={projectImg01}
              company="JL Auto"
              webUrl="charlotteautowiz.com"
              description="Local Auto Mechanic Shop asked us to build a booking system for their business."
            />
          </div>
          <div className="col-lg-4">
            <Projects
              img={projectImg02}
              company="JL Auto"
              webUrl="charlotteautowiz.com"
              description="Local Auto Mechanic Shop asked us to build a booking system for their business."
            />
          </div>
          <div className="col-lg-4">
            <Projects
              img={projectImg03}
              company="JL Auto"
              webUrl="charlotteautowiz.com"
              description="Local Auto Mechanic Shop asked us to build a booking system for their business."
            />
          </div>
        </div>
      </div>
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
