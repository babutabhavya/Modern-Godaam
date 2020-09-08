import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./styles.scss";

export default function Packaging(props) {
  return (
    <div id="packaging">
      <div className="heading">
        <h1>Packaging</h1>
      </div>
      <Container style={{ width: "92vw" }}>
        <Row>
          <Col>
            <h3>Smart Packaging Solutions for Your eCommerce Business </h3>
            <p>
              Making Packaging Easy and Accessible for Businesses of All Sizes.
            </p>
            <p>
              Offer your consumer a cost effective packaging experience with
              uniform quality — your one-stop shop for online packaging
              purchases/supplies.
            </p>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image
              className="w-50"
              src={require("../../assets/images/packaging-1.png")}
            />
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#BEBCBC" }} className="mt-5">
          <div className="d-block mx-auto text-center mt-4">
            <h3 style={{ width: "max-content" }}>Our Products</h3>
            <p>
              Buy High Quality Corrugated Boxes and Flyers at The Lowest Prices
            </p>
          </div>
          <Carousel className="w-100">
            <Carousel.Item>
              <Row
                className="mx-auto p-5"
                style={{ width: "92.5%", height: "30vw" }}
              >
                <Col className="h-100">
                  <Row className="h-100 ml-3">
                    <div className="d-flex justify-content-center align-items-center w-25 text-center">
                      Corrugated Box (10x10x10 Inches)
                    </div>
                    <div className="h-100 w-75">
                      <Image
                        className="carousel-image w-100 h-100"
                        src={require("../../assets/images/packaging-2.png")}
                      />
                    </div>
                  </Row>
                </Col>
                <Col className="h-100">
                  <Row className="h-100 ml-3 mr-3">
                    <div className="h-100 w-75">
                      <Image
                        className="carousel-image w-100 h-100"
                        src={require("../../assets/images/packaging-3.png")}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-25 text-center">
                      <div>
                        <div>
                          Corrugated Box <br />
                          (7x4x2 Inches)
                        </div>
                        <div className="mt-3">
                          Corrugated Box <br />
                          8x6x4 Inches)
                        </div>
                        <div className="mt-3">
                          Corrugated Box <br />
                          (18x12x10 Inches)
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row
                className="mx-auto p-5"
                style={{ width: "92.5%", height: "30vw" }}
              >
                <Col className="h-100">
                  <Row className="h-100 ml-3">
                    <div className="d-flex justify-content-center align-items-center w-25 text-center">
                      Corrugated Box (10x10x10 Inches)
                    </div>
                    <div className="h-100 w-75">
                      <Image
                        className="carousel-image w-100 h-100"
                        src={require("../../assets/images/packaging-2.png")}
                      />
                    </div>
                  </Row>
                </Col>
                <Col className="h-100">
                  <Row className="h-100 ml-3 mr-3">
                    <div className="h-100 w-75">
                      <Image
                        className="carousel-image w-100 h-100"
                        src={require("../../assets/images/packaging-4.png")}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-25 text-center"></div>
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row
                className="mx-auto p-5"
                style={{ width: "92.5%", height: "30vw" }}
              >
                <Col className="h-100">
                  <Row className="h-100 ml-3">
                    <div className="d-flex justify-content-center align-items-center w-25 text-center"></div>
                    <div className="h-100 w-75">
                      <Image
                        className="carousel-image w-100 h-100"
                        src={require("../../assets/images/packaging-5.png")}
                      />
                    </div>
                  </Row>
                </Col>
                <Col className="h-100">
                  <Row className="h-100 ml-3 mr-3">
                    <div className="h-100 w-75">
                      <Image
                        className="carousel-image w-100 h-100"
                        src={require("../../assets/images/packaging-6.png")}
                      />
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-25 text-center"></div>
                  </Row>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}
