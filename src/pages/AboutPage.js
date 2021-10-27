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
                    
                        I am currently a Computer Science and Engineering student at the University of Alaska Anchorage. I am recently certified in Full Stack Web Development from the University of Washington. I currently live in Anchorage, Alaska.
                        As I've grown as a developer and designer, I have worked alongside many talented people who have
                        raised my standards for what's expected of any product.
                        I am both driven and self motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to always better myself in the field.
                        
                </Row>
            </Content >

        </div >
    )
}

export default AboutPage
