import React from "react";
import { Col, Container, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Col sm={10} className="footer-img">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <div className="social-icon">
            <a href="https://www.instagram.com/mertkerimi/">
              <img src={navIcon3} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/mert-kerimi-853984218/">
              <img src={navIcon1} alt="Linkedin" />
            </a>
            <a href="https://github.com/mertkerimi">
              <img src={navIcon2} alt="Github" />
            </a>
          </div>
          <p>Developed by Mert Kerimi © 2022</p>
        </Col>
      </Container>
    </footer>
  );
};
export default Footer;
