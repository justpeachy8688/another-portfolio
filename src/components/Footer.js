import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css";

function Footer() {
    return (
        <footer className="footer mt-5">
            <Container fluid={true}>
                <Row className=" justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Taylor Sanders
        </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
