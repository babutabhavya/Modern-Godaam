import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./styles.scss";

export default function Why(props) {
  const { isMobile } = props;
  return (
    <div className="gray-container why">
      <div className="heading">
        <h1>
          Why <span>Modern Godaam?</span>
        </h1>
      </div>
      <Container style={{ width: "95vw" }}>
        <Row>
          <Col className="d-flex justify-content-center">
            <Fade effect="top">
              <h2 className="justify-text-center">
                Modern Godaam provides wholistic logistics solutions provides
                end-to-end supply chain. Wide variety of discounted domestic
                shipping for our valued clients with cash on delivery
                facilities, and many other value added services for a fraction
                of the cost.
              </h2>
            </Fade>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Row className={`mx-auto w-75 ${isMobile ? "d-block" : ""}`}>
          <Col>
            <Row className="w-75 h-75 mx-auto">
              <Image
                className="w-100 h-100"
                src={require("../../assets/images/why-4.png")}
              />
            </Row>
            <Row className="mt-4">
              <p className="mx-auto">Technology Driven Systems</p>
            </Row>
          </Col>
          <Col>
            <Row className="w-75 h-75 mx-auto">
              <Image
                className="w-100 h-100"
                src={require("../../assets/images/why-5.png")}
              />
            </Row>
            <Row className="mt-4">
              <p className="mx-auto">Experienced Professionals</p>
            </Row>
          </Col>
          <Col>
            <Row className="w-75 h-75 mx-auto">
              <Image
                className="w-100 h-100"
                src={require("../../assets/images/why-6.png")}
              />
            </Row>
            <Row className="mt-4">
              <p className="mx-auto">Zero Warehouse Shrinkage</p>
            </Row>
          </Col>
        </Row>
        <Row className={`mx-auto w-75 ${isMobile ? "d-block" : ""}`}>
          <Col>
            <Row className="w-75 h-75 mx-auto">
              <Image
                className="w-100 h-100"
                src={require("../../assets/images/why-1.png")}
              />
            </Row>
            <Row className="mt-4">
              <p className="mx-auto text-center">
                Flexible Storage & Warehousing Facility
              </p>
            </Row>
          </Col>
          <Col>
            <Row className="w-50 h-75 mx-auto">
              <Image
                className="w-100 h-100"
                src={require("../../assets/images/why-3.png")}
              />
            </Row>
            <Row className="mt-4">
              <p className="mx-auto">Reduce Cost & Increased Efficiency</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
