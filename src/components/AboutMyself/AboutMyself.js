import React from "react";
import "./AboutMyself.css";

export const AboutMyself = () => {
    return (
        <div className = "app-about">
            <div className = "app-about-title">
                about me.
            </div> 

            <div className = "app-about-text">
                - I'm a freshman CS student at Tecnológico de Monterrey, Campus Sonora Norte, Mexico. <br />
                - I'm currently learning about data structures and algorithms, and I'm also learning about web development. <br />
                - I'm interested in learning about machine learning, and I'm also interested in learning about game development. <br />
                Nice to meet you! <br />
            </div> 
        </div>
    );
}

export default AboutMyself;