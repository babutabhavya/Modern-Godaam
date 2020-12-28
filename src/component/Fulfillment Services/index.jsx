import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.scss";

export default function FulfillmentServices(props) {
  const { isMobile } = props;
  return (
    <div id="fulfillment">
      <div className="heading">
        <h1>
          Fulfillment <span>Services</span>
        </h1>
      </div>
      <Container className="mx-auto">
        <Row>
          <h2 className="justify-text-center">
            Fullfillment services for India’s leading players, e-commerce
            solutions, working with the best of logistics service to help your
            business grow.
          </h2>
        </Row>
        <Row className="justify-content-center w-100">
          <Image
            src={require("../../assets/images/fulfillment-4.png")}
            className="w-100 h-100"
          />
        </Row>
      </Container>
      <Container className="mt-2 mx-auto">
        <Row sm={1} xs={1} lg={2} md={2}>
          <Col className="d-flex align-items-center">
            <div>
              <h3>Retail, Wholesale And Multi- Channel Sales</h3>
              <p className="justify-text-center">
                Our approach to fulfillment enables us to serve retailers and
                wholesalers alike. We have integrated B2B and B2C frameworks in
                our client dashboard which helps them in monitoring inventory
                levels, sales trends and thus take an informed decision with
                respect to future purchases.
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src={require("../../assets/images/fulfillment-1.png")} />
          </Col>
        </Row>
        <Row className="mt-5" sm={1} xs={1} lg={2} md={2}>
          {isMobile ? (
            <>
              <Col className="d-flex align-items-center">
                <div>
                  <h3>Online Marketplace Assured</h3>
                  <p className="justify-text-center">
                    Online marketplaces give you the opportunity to widen your
                    reach to new customers and scale upwards. We serve as a
                    backend to these fulfillment operations that have to be
                    undertaken for any online seller.
                  </p>
                </div>
              </Col>
              <Col className="d-flex justify-content-center">
                <Image src={require("../../assets/images/fulfillment-2.png")} />
              </Col>
            </>
          ) : (
            <>
              <Col className="d-flex justify-content-center">
                <Image src={require("../../assets/images/fulfillment-2.png")} />
              </Col>
              <Col className="d-flex align-items-center">
                <div>
                  <h3>Online Marketplace Assured</h3>
                  <p className="justify-text-center">
                    Online marketplaces give you the opportunity to widen your
                    reach to new customers and scale upwards. We serve as a
                    backend to these fulfillment operations that have to be
                    undertaken for any online seller.
                  </p>
                </div>
              </Col>
            </>
          )}
        </Row>
        <Row className="mt-5" sm={1} xs={1} lg={2} md={2}>
          <Col className="d-flex align-items-center">
            <div>
              <h3>E-Commerce Fulfillment</h3>
              <p className="justify-text-center">
                Our finely tuned E-commerce fulfillment process makes sure that
                as soon as an order flows into our system through one of your
                partner channels, the item/order would be carefully and
                efficiently picked, packed, labeled and kept ready for dispatch.
                Our aim is to reduce your operational overheads, and reduce the
                TAT for your orders.
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center">
            <Image src={require("../../assets/images/fulfillment-3.png")} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
