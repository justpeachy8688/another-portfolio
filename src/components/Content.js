import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";


function Content(props) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col className="about-paragraph" md={8} lg={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content
