import React from 'react'
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

function Social() {
    return (
        <div className="social-container">
            <a href="https://github.com/justpeachy8688"
                className="github"><FontAwesomeIcon icon={faGithub} size="5x" /></a>
            <a href="https://www.linkedin.com/in/taylor-n-sanders/"
                className="linked-in"><FontAwesomeIcon icon={faLinkedin} size="5x" /></a>
        </div>
    )
}

export default Social;
