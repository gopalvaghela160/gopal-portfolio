import React, { useState, useEffect } from "react";
import "../App.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link (mobile)
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`main-header ${scrolled ? "fixed-header" : ""}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <h2>GOPAL</h2>
            </a>
          </div>

          {/* Hamburger Icon */}
          <div
            className={`hamburger-icon ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation */}
          <nav className={`main-menu ${menuOpen ? "open" : ""}`}>
            <ul>
              <li className="current">
                <a href="#home" onClick={handleMenuClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleMenuClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={handleMenuClick}>
                  Services
                </a>
              </li>
              <li>
                <a href="#project" onClick={handleMenuClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuClick}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
