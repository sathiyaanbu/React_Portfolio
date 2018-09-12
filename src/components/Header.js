import React, { Component } from "react";
import "../style/Header.css";
import Social from "./Social";
import Scroll from "react-scroll";

const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const Link = Scroll.Link;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: "nav-v1",
      text: "logo-v1"
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    scrollSpy.update();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    if (window.pageYOffset > 0) {
      this.setState({ nav: "nav-v2", text: "logo-v2" });
    } else if (window.pageYOffset === 0) {
      this.setState({ nav: "nav-v1", text: "logo-v1" });
    }
  }
  render() {
    return (
      <div className="Homepage">
        <nav
          className={`nav nav-sticky navbar navbar-expand-lg navbar-light ${
            this.state.nav
          }`}
        >
          <div className="container ">
            <a
              onClick={() => scroll.scrollToTop()}
              className="navbar-brand text-white"
            >
              <h1 id="logo" className={this.state.text}>
                Sathiya Anbu
              </h1>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li>
                  <Link
                    activeClass="active"
                    to="home-element"
                    spy={true}
                    smooth={true}
                    duration={400}
                    offset={0}
                  >
                    <span className={`nav-link text-white ${this.state.text}`}>
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="skills-element"
                    spy={true}
                    smooth={true}
                    duration={400}
                    offset={0}
                  >
                    <span className={`nav-link text-white this.state.text`}>
                      Skills
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="projects-element"
                    spy={true}
                    smooth={true}
                    duration={400}
                    offset={0}
                  >
                    <span className={`nav-link text-white this.state.text`}>
                      Projects
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="about-element"
                    spy={true}
                    smooth={true}
                    duration={400}
                    offset={0}
                  >
                    <span className={`nav-link text-white this.state.text`}>
                      About
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container text-white">
          <p className="ShortDescription">
            A blooming Frontend developer loves to work in React.
          </p>
        </div>
        <Social iconColor="icon-white" />
        <div className="header-learnmore pulse">
          <h3>Learn more</h3>
          <Link
            activeClass="active"
            to="skills-element"
            spy={true}
            smooth={true}
            duration={500}
            offset={-20}
          >
            <i
              className="fa fa-chevron-down chevron-down fa-2x"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    );
  }
}
