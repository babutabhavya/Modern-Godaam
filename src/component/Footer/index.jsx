import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import SocialMediaButtons from "../SocialMediaButtons/index";
import "./styles.scss";

export default function Footer(props) {
  const { isMobile } = props;
  return (
    <div className="text-center footer-container text-left">
      <Container className={isMobile ? "d-block" : "d-flex"}>
        <Col className="footer-col">
          <Row className="footer-title ">Modern Godaam</Row>
          <Row>
            <p>Some Content</p>
          </Row>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">Useful Links</Row>
          <Row className="footer-sub footer-links">
            <Link to="about-us" smooth={true} offset={-10}>
              About Us
            </Link>
          </Row>
          <Row className="footer-sub footer-links">
            <Link to="contact-us" smooth={true} offset={-10}>
              Contact Us
            </Link>
          </Row>
        </Col>
        <Col className="footer-col text-left">
          <Row className="footer-title">Get In Touch</Row>
          <Row className="d-block">
            <h5 className="footer-sub">Address</h5>
            <div className="d-flex">
              <p className="footer-desc">
                Khasra no 205-206, Govind Mohalla, Haiderpur, Delhi - 110088
              </p>
            </div>
          </Row>
          <Row className="d-block">
            <h5 className="footer-sub">Phone Number</h5>
            <div className="d-flex">
              <a href="tel:+919953204151">+919953204151</a>
            </div>
            <div className="d-flex">
              <a href="tel:+919711817208">+919711817208</a>
            </div>
          </Row>
          <Row className="d-block">
            <h5 className="footer-sub">Email</h5>
            <div className="d-flex">
              <a href="mailto:info@moderngodaam.com">info@moderngodaam.com</a>
            </div>
          </Row>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">Social Media</Row>
          <SocialMediaButtons isMobile={isMobile} />
        </Col>
      </Container>
    </div>
  );
}
