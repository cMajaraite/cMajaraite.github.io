import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container inner">
        <div className="brand">
          Portfo<span>lio.</span>
        </div>

        {/* Hamburger button (only visible on mobile) */}
        <button
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setIsOpen(false)}>
            Services
          </a>
          <a href="#studies" onClick={() => setIsOpen(false)}>
            Studies
          </a>
          <a href="#frameworks" onClick={() => setIsOpen(false)}>
            Tools
          </a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
