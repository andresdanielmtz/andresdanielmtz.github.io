import React from "react";
import ProjectTemplate from "./project-template/project-template";


const Projects = () => {
    return (
        <div className = "app-projects">
            <div className = "app-projects-title">
                Projects
            </div>
            <div className = "app-projects-content">
                <div className = "app-projects-content-box">
                    <div> 
                        

                    </div>

                    <ProjectTemplate /> 
                </div> 
            </div> 
        </div>
    )
}

export default Projects;