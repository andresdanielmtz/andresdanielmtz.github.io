import React from "react";
import "./project-template.css";

// {`images/${props.image}`}
const ProjectTemplate = (props) => {
  return (
    <div className="project-box">
      <div className="project-box-image">
        <img
          src={props.imgDir}
          alt="project-screenshot"
          className="project-box-img"
        />
      </div>

      <div className="project-box-content">
        <div className="project-box-date">{props.date}</div>
        <div className="project-box-title">{props.title}</div>

        <div className="project-box-description">{props.children}</div>
        <div className="project-box-link">
          <a href={props.projectUrl} target="_blank" rel="noopener noreferrer">
            {" "}
            Link to the project. ↗
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
