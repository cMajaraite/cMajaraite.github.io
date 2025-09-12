import "../styles/services.css";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">My Services</h2>

        <div className="serv-content">
          {/* Web Development */}
          <div className="card">
            <div className="box">
              <span
                className="material-icons"
                style={{ color: "#5e83d1", fontSize: "45px" }}
              >
                code
              </span>
              <div className="text">Web Development</div>
              <p>
                Building websites and apps with HTML, CSS, JavaScript, and
                frameworks like React & Angular. Still learning and eager to
                grow through real-world projects.
              </p>
            </div>
          </div>

          {/* Web Design */}
          <div className="card">
            <div className="box">
              <span
                className="material-icons"
                style={{ color: "#5e83d1", fontSize: "45px" }}
              >
                brush
              </span>
              <div className="text">Web Design</div>
              <p>
                Creating responsive, accessible interfaces with a focus on clean
                layouts, readable typography and good UX.
              </p>
            </div>
          </div>

          {/* UX Design */}
          <div className="card">
            <div className="box">
              <span
                className="material-icons"
                style={{ color: "#5e83d1", fontSize: "45px" }}
              >
                touch_app
              </span>
              <div className="text">UX Design</div>
              <p>
                Applying core UX principles from my studies: usability, clarity,
                and user-centered flows. Interested in growing this skill
                further.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
