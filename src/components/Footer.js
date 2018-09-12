import React, { Component } from "react";
import "../style/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="social-links" style={{ backgroundColor: "#55caf9" }}>
        <div className="container mb-1 mt-1 pt-1 d-inline-flex justify-content-center">
          <div>
            <a href="https://github.com/sathiyaanbu" className="icon-white">
              <i
                className="fab fa-github icon"
                aria-hidden="true"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/sathiya-anbu-0831b526/"
              className="icon-white"
            >
              <i
                className="fab fa-linkedin icon"
                aria-hidden="true"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/sathya_anbu" className="icon-white">
              <i
                className="fab fa-twitter-square icon"
                aria-hidden="true"
                target="_blank"
                rel="noopener noreferrer"
              />
            </a>
          </div>
        </div>
        <br />
        <div className="container">
          <div
            className="mx-auto pb-1"
            style={{ display: "block", width: "200px" }}
          >
            <h6>© Sathiya</h6>
          </div>
        </div>
      </div>
    );
  }
}
