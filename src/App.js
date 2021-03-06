import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Taylor Sanders',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Hello;',
        subTitle: 'Welcome to my Page',
        text: 'Checkout some of my work below'
      },
      about: {
        title: 'About Me'

      },
      contact: {
        title: "Let's Chat?"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className='p-1 main-content' fluid={true}>
          <Navbar className="navbar-dark" bg="transparent" expand="lg">
            <Navbar.Brand>Taylor Sanders</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    )

  }
}


export default App;
