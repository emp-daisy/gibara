import React from "react";
import HeroImg from "../assets/Hero image.png";
import GidaraLogo from "../assets/gidara-logo.png";

const HeroSection = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const openMobileNavbar = () => setNavOpen(!navOpen)
  const scrollDown = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <header
        id="navbar"
        className={`${navOpen && "opened"}`}
        onClick={openMobileNavbar}
      >
        <nav className="navbar-container container">
          <a href="/" className="home-link">
            <div className="navbar-logo">
              <img src={GidaraLogo} alt="logo" />{" "}
            </div>
            Gidara
          </a>
          <button type="button" className="navbar-toggle" id="navbar-toggle">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="navbar-menu">
            <ul className="navbar-links">
              <li className="navbar-item">
                <a className="navbar-link" href="/about">
                  Companies
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/blog">
                  Team
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/careers">
                  Resources
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/contact">
                  Programs
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/contact">
                  Blog
                </a>
              </li>
              <li className="navbar-item">
                <a className="navbar-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="hero-section">
        <div className="hero-section__brand">
          <div className="hero-section__brand-column text">
            <div className="hero-section__brand-column-1">
              <p className="brand-slogan">Your music career success partner</p>
              <h5 className="brand-message">
                We back Nigerian indie artists from around the world and help
                them do their best work
              </h5>
              <span className="brand-mission">
                We invest between N2m - N5m in marketing, production and
                promotional fees in youbg budding Nigerian artists and help them
                suceed with design support and our network of successful Indie
                musicians
              </span>
            </div>
            <div className="arrow-buttons" onClick={scrollDown}>
              <div className="arrow-button">
                <span> &#10230;</span>
              </div>
            </div>
          </div>
          <div className="hero-section__brand-column">
            <img src={HeroImg} className="hero-img" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;