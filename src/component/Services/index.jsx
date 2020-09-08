import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Fade } from "react-reveal";
import "./styles.scss";

export default function Services(props) {
  const { isMobile } = props;
  return (
    <div className="text-center gray-container services pb-5">
      <div className="heading">
        <h1>
          Our <span>Services</span>
        </h1>
      </div>

      <Fade effect="top">
        <h2 style={{ width: "90vw" }} className="mx-auto justify-text-center">
          Whether your business is large or small, Modern Godaam is the perfect
          solution for your product storage and transportation needs.
        </h2>
      </Fade>
      <Container>
        <Row className={`mx-auto mt-3 ${isMobile ? " d-block" : ""}`}>
          <Col>
            <h3>Packaging</h3>
            <p className="justify-text-center">
              The bread and butter of any fulfillment service is the ability to
              pick, pack, and ship the appropriate items on time. When the order
              information arrives at the warehouse the items need to be located
              and collected. Once gathered, the products will need to be
              packaged in a proper packing with the necessary packing dunnage,
              secure tape, and shipping label. The finished package is then
              ready for pickup by a shipping provider.
            </p>
          </Col>
          <Col>
            <h3>Warehousing and Order Fulfilment</h3>
            <Image src={require("../../assets/images/chart-1.png")} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
