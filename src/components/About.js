import React, { Component } from "react";
import Scroll from "react-scroll";
import SectionHeader from "./SectionHeader";
import "../style/About.css";

const Element = Scroll.Element;

class About extends Component {
  render() {
    return (
      <Element name="about-element">
        <section className="about-section">
          <SectionHeader title="About Me" />
          <img
            src="./images/dp.png"
            className="round-border profile-pic"
            alt="Sathiya Anbu"
          />
          <br />
          <div className="about-summary">
            <p>
              A Frontend developer likes to do coding in React and have passion
              to learn new technologies. I decided to apply my love of
              technology and analytical thinking towards the software devepment.
              I'm currently a frontend developer specializing in JavaScript.
              Good team player as well as independent in work.
            </p>
            <p>
              Apart from technology more interest to do gardening, photgraphy,
              cooking, Baking, travelling.I also care deeply about environmental
              issues, do some voluteer activities.
            </p>
            <p>
              If you'd like to get in touch, message me on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sathiya-anbu-0831b526/"
              >
                LinkedIn
              </a>
            </p>
            <p>
              You can take a look of my{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/e/2PACX-1vTdP1ztgxpy45aldyq-oNbQCFFNsVphyZ7SfqjOip_n1UpED_SAg3w6qaB0HGd3-JZncoRp2EsPEXN1/pub"
              >
                Resume
              </a>
            </p>
            <p>Thanks for visiting!</p>
          </div>
        </section>
      </Element>
    );
  }
}

export default About;
