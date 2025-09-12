import { ReactTyped } from "react-typed";
import BgFront from "../assets/Images/bg-front.jpg"; // ← your background image
import MeImg from "../assets/Images/bg2.jpg"; // ← your avatar
import "../styles/hero.css";

export default function Hero() {
  return (
    <section
      className="home"
      id="home"
      style={{ backgroundImage: `url(${BgFront})` }}
    >
      <div className="max-width">
        <div className="home-content header-flex">
          {/* Avatar / image */}
          <div className="image-wrapper">
            <img src={MeImg} alt="Cordelia Majaraite" />
          </div>

          {/* Intro + social + typed */}
          <div className="intro">
            <div className="social-icons">
              <a
                href="https://github.com/cMajaraite"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/cordelia-majaraite-aa507927a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="text-2">Cordelia Majaraite</div>

            <div className="typed-line">
              I Am{" "}
              <span className="textSpan">
                <ReactTyped
                  strings={["Frontend Developer", "Web Developer"]}
                  typeSpeed={80}
                  backSpeed={60}
                  loop
                />
              </span>
            </div>

            <a href="#contact" className="cta-btn">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
