import React from "react";
import "./Home.css";
import github from "./icons/featherIcons/gh.svg";
import linkedin from "./icons/featherIcons/ln.svg";
import email from "./icons/featherIcons/mail.svg";

export const Home = () => {
  return (
    <div className="app-Home">
      <div className="app-title">
        <div className="app-title-text">
          andrés <br /> martínez.
        </div>
        <div className="app-title-subtext">
          <br />

          <p>
            <div
              className="app-cs-subtitle"
              style={{ display: "inline-block" }}
            >
              {" "}
              Freshman <b> CS Student </b>{" "}
            </div>{" "}
            @ Tecnológico de Monterrey <br />
            Campus Sonora Norte, Mexico <br />
          </p>

          <ul id="contact-list">
            <li>
              {" "}
              <a
                class="contact-link"
                href="https://github.com/andresdanielmtz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="github icon" className="contact-icons" src={github} />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                class="contact-link"
                href="https://www.linkedin.com/in/andr%C3%A9s-daniel-mart%C3%ADnez-berm%C3%BAdez-997b17249/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="contact-icons" alt = "linkedin icon" src={linkedin} />{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                class="contact-link"
                href="mailto:andresdanielmtz@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="contact-icons" alt = "email icon" src={email} />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
};
