import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ICONS } from "../../constants/icons";
import { Link } from "react-scroll";
import "./styles.scss";

export default function Footer(props) {
  const { isMobile, title, description } = props;
  return (
    <div className="footer-container">
      <Container className={isMobile ? "d-block" : "d-flex"}>
        <Col className="footer-col">
          <Row className="footer-title ">{title}</Row>
          <Row>{description}</Row>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">USEFUL LINKS</Row>
          <div className="useful-links">
            <Link to="___gatsby" smooth={true} offset={-100}>
              HOME
            </Link>
            <Link to="services" smooth={true} offset={-100}>
              SERVICES
            </Link>
            <Link to="about-us" smooth={true} offset={-100}>
              ABOUT US
            </Link>
            <Link to="contact-us" smooth={true} offset={-100}>
              CONTACT US
            </Link>
          </div>
        </Col>
        <Col className="footer-col">
          <Row className="footer-title">GET IN TOUCH</Row>
          <div className="d-flex">
            <ICONS.WAREHOUSE size={30} color="white" />
            <div className="footer-desc ml-3">
              Khasra no 205-206, Govind Mohalla, Haiderpur,
              <br /> Delhi - 110088
            </div>
          </div>
          <div className="d-flex mt-3">
            <ICONS.PHONE size={30} color="white" />
            <div className="ml-3">
              <a href="tel:+919953204151">+919953204151</a>
              <br />
              <a href="tel:+919711817208">+919711817208</a>
            </div>
          </div>
          <div className="d-flex mt-3">
            <ICONS.MAIL size={35} color="white" />
            <div className="ml-3">
              <a href="mailto:info@moderngodaam.com">info@moderngodaam.com</a>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
}
