import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./styles.scss";

export default function Packaging(props) {
  const { isMobile } = props;
  const data = [
    {
      image1: require("../../assets/images/packaging-2.png"),
      image2: require("../../assets/images/packaging-3.png"),
    },
    {
      image1: require("../../assets/images/packaging-3.png"),
      image2: require("../../assets/images/packaging-4.png"),
    },
    {
      image1: require("../../assets/images/packaging-5.png"),
      image2: require("../../assets/images/packaging-6.png"),
    },
  ];
  return (
    <div id="packaging">
      <div className="heading">
        <h1>Packaging</h1>
      </div>
      <Container>
        <Row xs={1} sm={1} lg={2} md={2}>
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
          <Col
            className="d-flex justify-content-center"
            style={{ width: isMobile ? "20vw" : "100%" }}
          >
            <Image
              className="w-100 h-100"
              src={require("../../assets/images/packaging-1.png")}
            />
          </Col>
        </Row>
        <Row style={{ backgroundColor: "#BEBCBC" }} className="mt-5">
          <div
            className={`d-block mx-auto text-center heading ${
              isMobile && "mt-2"
            }`}
          >
            <h1 className="mx-auto">
              Our <span>Products</span>
            </h1>
            <p className="pl-2 pr-2">
              Buy High Quality Corrugated Boxes and Flyers at The Lowest Prices
            </p>
          </div>
          <Carousel className="w-100">
            {data.map((element, index) => (
              <Carousel.Item key={`carousel-item-${index}`}>
                <Row
                  className="mx-auto"
                  style={
                    isMobile
                      ? { width: "99%", height: "50vw", paddingBottom: "7.5vw" }
                      : {
                          width: "92.5%",
                          height: "35vw",
                          padding: "0rem 3rem 3rem 3rem",
                        }
                  }
                >
                  <Col className="h-100">
                    <Row className={`h-100 ${isMobile ? "ml-1" : "ml-3"}`}>
                      <div className="h-100 w-100">
                        <Image className="w-100 h-100" src={element.image1} />
                      </div>
                    </Row>
                  </Col>
                  <Col className="h-100">
                    <Row
                      className={`h-100 ${
                        isMobile ? "ml-1 ml-1 p-0" : "ml-3 mr-3"
                      }`}
                    >
                      <div className="h-100 w-100">
                        <Image className="w-100 h-100" src={element.image2} />
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}
