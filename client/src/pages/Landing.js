import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components/index";
import main from "../assets/images/main-alternative.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            laudantium natus maxime tempora non, illum odit incidunt magni
            deserunt quibusdam enim atque animi veniam saepe earum,
            necessitatibus magnam repellendus blanditiis?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
