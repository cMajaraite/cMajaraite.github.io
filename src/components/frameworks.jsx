import Carousel from "./carousel";
import "../styles/frameworks.css";

import ReactIcon from "../assets/Images/react_icon.png";
import AngularIcon from "../assets/Images/angular-icon.png";
import NodemonIcon from "../assets/Images/nodemon.png";
import BootstrapIcon from "../assets/Images/bootstrap_icon.png";
import GithubIcon from "../assets/Images/github_icon.png";
import VSCodeIcon from "../assets/Images/vscode.png";
import NodeJSIcon from "../assets/Images/nodeJS_icon.png";
import SqliteIcon from "../assets/Images/sqlite.png";
import FigmaIcon from "../assets/Images/figma-icon.png";

const TOOLS = [
  { img: ReactIcon, name: "React" },
  { img: AngularIcon, name: "Angular" },
  { img: NodemonIcon, name: "Nodemon" },
  { img: BootstrapIcon, name: "Bootstrap" },
  { img: GithubIcon, name: "GitHub" },
  { img: VSCodeIcon, name: "VS Code" },
  { img: NodeJSIcon, name: "Node.js" },
  { img: SqliteIcon, name: "Better SQLite3" },
  { img: FigmaIcon, name: "Figma" },
];

export default function Frameworks() {
  return (
    <section className="framework" id="frameworks">
      <div className="max-width">
        <h2 className="title">Frameworks and tools</h2>

        <div className="port-content">
          <Carousel show={3}>
            {TOOLS.map((t) => (
              <div key={t.name}>
                <div className="card">
                  <div className="box">
                    <img className="tech-icon" src={t.img} alt={t.name} />
                    <div className="text">{t.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
