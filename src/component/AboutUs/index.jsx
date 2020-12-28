import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.scss";

export default function AboutUs(props) {
  return (
    <div id="about-us">
      <div className="heading">
        <h1>
          About <span>Us</span>
        </h1>
      </div>
      <Container className="mx-auto">
        <Row sm={1} xs={1} lg={2} md={2} className="about">
          <Col className="d-flex justify-content-center align-items-center">
            <p className="justify-text-center">
              We are a set of entrepreneurs who have put in years towards
              creating expertise in
              <strong>
                {" 3PL services, Warehousing, and Fulfillment Strategies"}
              </strong>
              . We at, modern godaam, help you upscale and expand your business
              and sales by giving the best possible solution for your business
              for the e-commerce marketplace
            </p>
          </Col>
          <div>
            <Image
              className="w-100"
              src={require("../../assets/images/about-1.png")}
            />
          </div>
        </Row>
        <Row sm={1} xs={1} lg={2} md={2} className="about">
          <div>
            <h3 className="w-75 text-center">
              Why <strong>3PL Services</strong> is the Need of the Hour?
            </h3>
            <div className="d-flex justify-content-center w-100">
              <Image
                src={require("../../assets/images/about-2.png")}
                className="w-100 h-100"
              />
            </div>
          </div>
          <Col className="d-flex justify-content-center align-items-center">
            <p className="justify-text-center">
              Modern godaam provides <strong>3PL Fulfillment Solutions</strong>
              to fit each customer’s individual needs. We understand that each
              business’s needs differ significantly. It is our goal to make sure
              we meet each of our client’s specific needs in the most seamless
              way possible. We guide you through fulfillment – with trail guides
              that meet you face-to-face, communicating with you every step of
              the way. At modern godaam, we still believe in people talking to
              people – and never forgetting the human element in every
              interaction.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
