import React, { Component } from "react";
import "../style/Projects.css";
import "../style/animations.css";
import SectionHeader from "./SectionHeader";
import projectInfo from "./projectData";
import Scroll from "react-scroll";
const Element = Scroll.Element;

const Project = props => {
  const {
    name,
    description,
    imageURL,
    github,
    demo,

    orientation,
    altText
  } = props.info;
  const { animation } = props;

  return (
    <div className={`project-card ${animation}`}>
      <div className="cardContent">
        <div className="project-img-container img-fluid">
          <img className={orientation} src={imageURL} alt={altText} />
        </div>
        <h2>{name}</h2>
        <p style={{ fontSize: "20px" }}>{description}</p>
      </div>
      <div className="link-container">
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        ) : null}
        <a href={github} target="_blank" rel="noopener noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: ""
    };
    this.animateScroll = this.animateScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.animateScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.animateScroll);
  }

  animateScroll(evt) {
    let scrollTop = evt.target.scrollingElement.scrollTop;
    if (scrollTop > 850) {
      this.setState({ animationClass: "fadeIn" });
    }
  }

  render() {
    return (
      <Element name="projects-element">
        <section className="project-section">
          <SectionHeader title="Projects" underlineColor="pink-underline" />
          <div className="projects-container">
            {projectInfo.map(project => (
              <Project
                info={project}
                key={project.id}
                animation={this.state.animationClass}
              />
            ))}
          </div>
        </section>
      </Element>
    );
  }
}

export default Projects;
