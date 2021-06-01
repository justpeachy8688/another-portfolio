import React from 'react'
import Hero from "../components/Hero";
import Content from "../components/Content";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import about from "../assets/images/paris.png";

import "../App.css";

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <Row className="m-auto">
                    <div className="container justify-content-center">
                        <img className="mx-auto about-image" src={about} alt="paris" />
                    </div>
                </Row>
                <Row className="about-text">
                    
                        Full Stack Developer who studied at the University of Washington. I currently live in Anchorage, Alaska.
                        As I've grown as a developer, I have worked alongside many talented developers and designers who have
                        raised my standards for what's expected of any application.
                        Through these experiences, I've had the opportunity to create memorable products that are not only
                        enjoyable to use but
                        are written in code that's maintainable and easy to understand.
                        
                </Row>
            </Content >

        </div >
    )
}

export default AboutPage
