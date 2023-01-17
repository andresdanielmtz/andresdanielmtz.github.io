import React from "react";
import "./project-template.css";

const ProjectTemplate = (props) => {

    let relativeDir = "src/components/Projects/project-template/project-template.js"; 

    return (
        <div className = "project-box">
            <div className = "project-box-image">
                Proyecto
            </div> 
            
            <div className = "project-box-text"> 
                <div className = "project-box-title">
                    {props.title}
                </div>
    
                <div className = "project-box-description">
                    {props.description}
                </div>
            </div>
        </div> 
    );
    }

export default ProjectTemplate;