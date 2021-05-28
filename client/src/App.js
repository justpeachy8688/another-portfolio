import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        title: 'Be Relentless',
        subTitle: 'Welcome to my Page',
        text: 'Checkout my work below'
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
        <Container className='p-1' fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
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
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/" exact render={() => <AboutPage />} />
          <Route path="/" exact render={() => <ContactPage />} />

          <Footer />

        </Container>
      </Router>
    )

  }
}


export default App;
