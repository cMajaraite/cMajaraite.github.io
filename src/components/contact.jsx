import "../styles/contact.css";
import ContactMeImg from "../assets/Images/contact-me.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>

        <div className="contact-content">
          {/* Left column */}
          <div className="column left">
            <div className="text">Get in touch</div>
            <p>
              If you’re interested in working together or have any questions,
              reach out via email or phone.
            </p>

            <div className="icons">
              <div className="row">
                <span className="material-icons" aria-hidden>
                  person
                </span>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Cordelia Majaraite</div>
                </div>
              </div>

              <div className="row">
                <span className="material-icons" aria-hidden>
                  place
                </span>
                <div className="info">
                  <div className="head">Location</div>
                  <div className="sub-title">Skåne, Sweden</div>
                </div>
              </div>

              <div className="row">
                <span className="material-icons" aria-hidden>
                  email
                </span>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">
                    <a href="mailto:cordelia@example.com">
                      cordelia@example.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <span className="material-icons" aria-hidden>
                  call
                </span>
                <div className="info">
                  <div className="head">Phone</div>
                  <div className="sub-title">+46 07X-XXX XX XX</div>
                </div>
              </div>
            </div>
          </div>

          <div className="column right contact-image-wrapper">
            <img src={ContactMeImg} alt="Contact me" className="contactImg" />
          </div>
        </div>
      </div>

      <footer>
        <span>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/cordelia-majaraite"
            target="_blank"
            rel="noreferrer"
          >
            Cordelia Majaraite
          </a>
        </span>
      </footer>
    </section>
  );
}
