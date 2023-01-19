import React from "react";
import ProjectTemplate from "./project-template/project-template";
import "./Projects.css";

import plantsOfLife from "./project-template/image/PlantsOfLife.png";
import MedicalMockUp from "./project-template/image/MedicalMockUp.png"
import Volcano from "./project-template/image/Volcano.png"
import NASASpaceApp2022 from "./project-template/image/NasaSpaceApp2022.png"

const Projects = () => {
  return (
    <div className="app-projects">
      <div className="app-projects-title">projects.</div>
      <br />
      <div className="app-projects-content">
        <div className="app-projects-content-box">
          <ProjectTemplate
            title="Trees of Life, SwiftUI"
            imgDir={plantsOfLife}
            date="December 2022 - January 2023"
            projectUrl="https://github.com/andresdanielmtz/TreesOfKnowledge"
          >
            Developed an application on SwiftUI that focuses on University
            Students discovering and learning about the specific plants and
            creatures that habit their own campus.
          </ProjectTemplate>
          <ProjectTemplate
            title="Medical Data Storage System Mock-Up, C++"
            date = "November - December 2022"
            imgDir={MedicalMockUp}
            projectUrl = "https://github.com/andresdanielmtz/TC1033"
          >
            Collaborated in pairs to develop a prototype of a Medical Data Storage
            System. Based on the input of the patient, the system 
            detects if the patient is considered "At risk" of it has symptoms related to COVID-19.
          </ProjectTemplate>
          <ProjectTemplate
            title="NASA Space App Challenge, Python"
            date = "October 2022"
            imgDir = {NASASpaceApp2022}
            projectUrl = "https://github.com/andresdanielmtz/The-Webb-Interactive-Project-"
          >
            Collaborated in team to create an entry to the NASA Space Apps Challenge Hackathon. 
            In this entry we developed a videogame that shows the different parts and capabilities of the NASA's James Webb Telescope.  
        </ProjectTemplate>
          <ProjectTemplate
            title="Projectile Kinematic Simulation Engine, MATLAB"
            date = "September - October 2022"
            imgDir = {Volcano}
            projectUrl = "https://github.com/andresdanielmtz/Projectile-Kinematic-Simulation-Engine"
          >
            Collaborated in teams to develop a real-time model of a Volcano eruption using physics, MATLAB and lots of math. 
        </ProjectTemplate>
        </div>
      </div>
    </div>
  );
};

export default Projects;
