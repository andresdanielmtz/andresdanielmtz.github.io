import React from "react";
import ProjectTemplate from "./project-template/project-template";
import "./Projects.css";

const Projects = () => {
    return (
        <div className = "app-projects">
            <div className = "app-projects-title">
                projects.
            </div>
            <br />
            <div className = "app-projects-content">
                <div className = "app-projects-content-box">

                    <ProjectTemplate title = "test" description = "This is just a test... beware"/> 
                    <ProjectTemplate title = "test" description = "This is just a test... beware"/> 
                    <ProjectTemplate title = "test" description = "This is just a test... beware"/> 
                    <ProjectTemplate title = "test" description = "This is just a test... beware"/> 
                </div> 
            </div> 
        </div>
    )
}

export default Projects;