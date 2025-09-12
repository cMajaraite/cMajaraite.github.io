import "./styles/base.css";
import "./styles/components.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import Studies from "./components/studies.jsx";
import Frameworks from "./components/frameworks.jsx";
import Portfolio from "./components/portfolio.jsx";
import Contact from "./components/contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Studies />
      <Frameworks />
      <Portfolio />
      <Contact />
    </>
  );
}
