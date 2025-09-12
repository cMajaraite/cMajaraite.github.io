import { ReactTyped } from "react-typed";
import MeImg from "../assets/Images/Me.jpg";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>

        <div className="about-content">
          <div className="column left">
            <img src={MeImg} alt="Cordelia Majaraite" />
          </div>

          <div className="column right">
            <div className="text">
              I am Cordelia and I am{" "}
              <span className="typing-2">
                <ReactTyped
                  strings={["Frontend Developer", "Web Developer"]}
                  typeSpeed={80}
                  backSpeed={80}
                  loop
                />
              </span>
            </div>

            <p>
              I am currently studying to become a Frontend Developer at EC
              Utbildning, and I am now looking for an internship (LIA) where I
              can challenge my current skills and continue growing as a
              developer. My main focus is on building clean, modern, and
              user-friendly web experiences that balance both design and
              functionality. I enjoy combining creativity and technology to
              bring ideas to life through code. I am motivated by
              problem-solving, learning new technologies, and writing solutions
              that improve the user experience.
            </p>

            <br />

            <p>
              Teamwork is something I highly value - I thrive when collaborating
              with others and sharing knowledge, but I am also comfortable
              working independently and taking responsibility for my own tasks.
              Through my internship, I hope to gain real-world experience,
              contribute with dedication and a strong work ethic, and continue
              developing both my technical and personal skills. My goal is to
              grow into a developer who not only delivers solid solutions but
              also adds creativity and value to every project I am part of.
            </p>

            <a
              href="/CV.pdf"
              download="Cordelia_Majaraite_CV.pdf"
              className="cta-btn"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
