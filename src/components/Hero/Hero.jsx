import "./Hero.css";
import { useState } from "react";

export default function Hero() {
  const [dropdown, setDropdown] = useState();

  return (
    <div className="hero">
      {dropdown ? (
        <>
          <div className="dropdown">
            <img
              src="images/ddClose.png"
              className="ddclose"
              onClick={() => {
                setDropdown(false);
              }}
            ></img>
            <a className="nav_link" href="/#about">
              ABOUT
            </a>
            <a className="nav_link" href="/#schedule">
              SCHEDULE
            </a>
            <a className="nav_link" href="/#speakers">
              SPEAKERS & JUDGES
            </a>
            <a className="nav_link" href="/#partners">
              PARTNERS
            </a>
            <a className="nav_link contact_nav" href="/#contact">
              Contact Us
            </a>
          </div>
        </>
      ) : null}
      <div className="header">
        <img
          src="images/hamburger.png"
          className="hamburger"
          onClick={() => {
            setDropdown(true);
          }}
        ></img>
        <div className="navigation_links">
          <a className="nav_link" href="/#about">
            ABOUT
          </a>
          <a className="nav_link" href="/#schedule">
            SCHEDULE
          </a>
          <a className="nav_link" href="/#speakers">
            SPEAKERS & JUDGES
          </a>
          <a className="nav_link" href="/#partners">
            PARTNERS
          </a>
          <a className="nav_link contact_nav" href="/#contact">
            Contact Us
          </a>
        </div>

        <a href="https://startup.exchange">
          <img src="images/SXprimaryLogo.png" className="header_logo"></img>
        </a>
      </div>

      <div className="hero_content">
        <img src="images/hero_image.png" className="hero_image"></img>
        <img src="images/hero_present.png" className="present_image"></img>
        <div className="date">12.01.22 | 5-8:30PM</div>
        <div className="location">TSQ ATL Social Club</div>
      </div>
    </div>
  );
}
