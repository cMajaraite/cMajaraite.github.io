import "../styles/portfolio.css";
import Carousel from "./Carousel";
import RetrendoVideo from "../assets/videos/Retrendo.mp4";
import FreakyFashionVideo from "../assets/videos/FreakyFashion.mp4";
import Connect4Gif from "../assets/gifs/CatsvsDogs.gif";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="max-width">
        <h2 className="title">My Portfolio</h2>

        {/* Wrap projects inside your Carousel */}
        <Carousel show={1} autoplay interval={4000} speed={600} infinite>
          {/* Retrendo Project */}
          <div className="project">
            <div className="column left">
              <video
                src={RetrendoVideo}
                className="project-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
            <div className="column right">
              <h3 className="project-title">
                Retrendo – Secondhand Marketplace
              </h3>
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
                href="https://github.com/cMajaraite/Retrendo.git"
                target="_blank"
                rel="noreferrer"
              >
                See Code
              </a>
            </div>
          </div>

          {/* FreakyFashion Project */}
          <div className="project">
            <div className="column left">
              <video
                src={FreakyFashionVideo}
                className="project-video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
            <div className="column right">
              <h3 className="project-title">FreakyFashion – Angular & React</h3>
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
                href="https://github.com/cMajaraite/FreakyFashion-Angular"
                target="_blank"
                rel="noreferrer"
              >
                See Code
              </a>
            </div>
          </div>
          {/* Connect4 Project */}
          <div className="project">
            <div className="column left">
              <img
                src={Connect4Gif}
                alt="Connect4 demo"
                className="project-gif"
                loading="lazy"
              />
            </div>
            <div className="column right">
              <h3 className="project-title">Connect4 — React + Tailwind</h3>
              <p className="project-desc">
                Cats vs Dogs Connect Four 🐱🐶 is a modern twist on the classic
                Connect Four game, built with React 19, Vite, and Tailwind CSS.
                Instead of the traditional red and yellow discs, players compete
                as Cats versus Dogs, giving the game a fun theme. The interface
                is styled entirely with Tailwind CSS, including semi-transparent
                overlays for a clean and playful look. The game logic is powered
                by React hooks such as useState to track the board and player
                turns.
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
