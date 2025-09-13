import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";

export default function Carousel({
  children,
  show = 3,
  infinite = true,
  autoplay = true,
  interval = 8000,
  speed = 300,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(React.Children.count(children));
  const [isMobile, setIsMobile] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const itemsToShow = isMobile ? 1 : show;

  useEffect(() => {
    setLength(React.Children.count(children));
  }, [children]);

  const next = () => {
    if (!length) return;
    if (infinite) {
      setCurrentIndex((idx) => (idx < length - itemsToShow ? idx + 1 : 0));
    } else {
      setCurrentIndex((idx) => Math.min(idx + 1, length - itemsToShow));
    }
  };

  const prev = () => {
    if (!length) return;
    if (infinite) {
      setCurrentIndex((idx) => (idx > 0 ? idx - 1 : length - itemsToShow));
    } else {
      setCurrentIndex((idx) => Math.max(idx - 1, 0));
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(next, interval);
    return () => clearInterval(autoplayRef.current);
  }, [autoplay, interval, length, itemsToShow]);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button onClick={prev} className="left-arrow" aria-label="Previous">
          ‹
        </button>

        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${itemsToShow}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: `transform ${speed}ms ease-in-out`,
            }}
          >
            {children}
          </div>
        </div>

        <button onClick={next} className="right-arrow" aria-label="Next">
          ›
        </button>
      </div>
    </div>
  );
}
