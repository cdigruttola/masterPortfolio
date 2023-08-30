import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    const openSource = settings.opensource;
    const hobbies = settings.hobbies;

    const MyLink = ({ name, link }) => {
      return (
        <li className="li">
          <NavLink
            to={link}
            tag={Link}
            activeStyle={{ fontWeight: "bold" }}
            style={{ color: theme.text }}
            onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
            onMouseOut={(event) => onMouseOut(event)}
          >
            {name}
          </NavLink>
        </li>
      );
    };

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <MyLink name="Home" link="/home" />
              <MyLink name="Education" link="/education" />
              <MyLink name="Experience" link="/experience" />
              <MyLink name="Projects" link="/projects" />
              <li className="li">
                <a
                  href="https://cdigruttola.it/shop"
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Shop
                </a>
              </li>
              {openSource && <MyLink name="Open Source" link="/opensource" />}
              {hobbies && <MyLink name="Hobbies" link="/hobbies" />}
              <MyLink name="Contact Me" link="/contact" />
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
