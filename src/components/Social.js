import React, { Component } from "react";
import "../style/Social.css";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socialLinks: [
        {
          name: "GitHub",
          image: "../images/github.png",
          fa: "fa-github",
          link: "https://github.com/sathiyaanbu"
        },
        {
          name: "LinkedIn",
          image: "../images/linkedin.png",
          fa: "fa-linkedin",
          link: "https://www.linkedin.com/in/sathiya-anbu-0831b526/"
        },
        {
          name: "Twitter",
          image: "../images/twitter.png",
          fa: "fa-twitter",
          link: "https://twitter.com/sathya_anbu"
        }
      ]
    };
  }

  render() {
    const socialLinks = this.state.socialLinks;
    return (
      <div className="social-links">
        {socialLinks.map(social => (
          <div
            className="social-link d-inline-flex justify-content-center"
            key={social.name}
          >
            <a
              href={social.link}
              className={this.props.iconColor}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/*<img src={social.image} alt={social.name}/> */}
              <i className={`fab ${social.fa}`} aria-hidden="true" />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Social;
