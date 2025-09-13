import "../styles/portfolio.css";
import Carousel from "./carousel";
import RetrendoGif from "../assets/gifs/Retrendo.gif";
import FreakyFashionGif from "../assets/gifs/FreakyFashion.gif";
import Connect4Gif from "../assets/gifs/CatsvsDogs.gif";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="max-width">
        <h2 className="title">My Portfolio</h2>

        <Carousel show={1} autoplay interval={4000} speed={600} infinite>
          {/* Retrendo */}
          <div className="project">
            <div className="column left">
              <img
                src={RetrendoGif}
                alt="Retrendo project demo"
                className="project-media"
              />
            </div>
            <div className="column right">
              <h2 className="project-title">
                Retrendo – Secondhand Marketplace
              </h2>
              <p className="project-desc">
                Retrendo is a Vinted-inspired secondhand e-commerce web app
                built as a group project at EC Utbildning. Users can browse and
                search items, filter by price/size/brand/condition/color,
                favorite products, and manage a cart. An admin panel lets us
                manage products, upload images, and auto-generate slugs. Built
                with Node.js, Express, EJS, and SQLite.
              </p>
              <a
                className="seeMoreBtn"
                href="https://your-retrendo-demo-link.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                See Code
              </a>
            </div>
          </div>

          {/* FreakyFashion */}
          <div className="project">
            <div className="column left">
              <img
                src={FreakyFashionGif}
                alt="FreakyFashion project demo"
                className="project-media"
              />
            </div>
            <div className="column right">
              <h2 className="project-title">FreakyFashion – Angular & React</h2>
              <p className="project-desc">
                FreakyFashion is a full-stack fashion e-commerce app built twice
                to compare frameworks: one with Angular + Node.js/SQLite and one
                with React + SQLite. Both versions support browsing/search,
                filters, product details & similars, favorites, and an admin
                flow to manage products. Created at EC Utbildning with my
                classmate Isabelle.
              </p>
              <a
                className="seeMoreBtn"
                href="https://your-freakyfashion-demo-link.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                See Code
              </a>
            </div>
          </div>

          {/* Connect4 */}
          <div className="project">
            <div className="column left">
              <img
                src={Connect4Gif}
                alt="Connect4 demo"
                className="project-media"
                loading="lazy"
              />
            </div>
            <div className="column right">
              <h2 className="project-title">Connect4 — React + Tailwind</h2>
              <p className="project-desc">
                Cats vs Dogs Connect Four is a modern twist on the classic game,
                built with React 19, Vite, and Tailwind CSS. Players compete as
                Cats vs Dogs. The UI is responsive and the game logic uses React
                hooks (useState) to manage board state and turns.
              </p>
              <a
                className="seeMoreBtn"
                href="https://catsvsdogsgameconnect4.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Try it out
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
