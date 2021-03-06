import React from 'react'
import "../App.css";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container className="text-center" fluid={true}>
                <Row className="justify-content-center text-align-center">
                    <Col className="pt-5 pb-5 text-center" md={8} sm={12}>
                        {props.title && <h2 className="hello font-weight-bolder">{props.title}</h2>}
                        {props.subTitle && <h4 className="display-4 font-weight-light">{props.subTitle}</h4>}
                        {props.text && <h5 className="lead font-weight-light">{props.text}</h5>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;
