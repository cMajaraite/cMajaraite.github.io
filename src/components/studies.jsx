import "../styles/studies.css";
import skillsBg from "../assets/Images/bg-skills.png";

export default function Studies() {
  return (
    <section
      className="skills"
      id="skills"
      style={{
        backgroundImage: `url(${skillsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-width">
        <h2 className="title">My Studies & Skills</h2>

        <div className="skills-content">
          {/* Vänster: Completed */}
          <div className="column left">
            <div className="text accent">Courses I Completed</div>
            <ul className="study-list">
              <li>HTML & CSS3 — 35 YH credits</li>
              <li>JavaScript 1 — 40 YH credits</li>
              <li>JavaScript 2 — 40 YH credits</li>
              <li>JavaScript 3 — 30 YH credits</li>
              <li>UX & UI — 25 YH credits</li>
              <li>Agile Project Methods — 20 YH credits</li>
              <li>Backend Development 1 — 30 YH credits</li>
              <li>Backend Development 2 — 35 YH credits</li>
            </ul>

            <a
              className="btn link-btn"
              href="https://github.com/cMajaraite"
              target="_blank"
              rel="noreferrer"
            >
              My GitHub
            </a>
          </div>

          {/* Höger: Left */}
          <div className="column right">
            <div className="text accent">Courses I Have Left</div>
            <ul className="study-list">
              <li>Thesis Project — 20 YH credits</li>
              <li>Internship: Frontend Development (LIA) — 125 YH credits</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
