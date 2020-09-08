import React from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import { FaWarehouse } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { BsClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Fade } from "react-reveal";
import CustomButton from "../CustomButton/index";
import "./styles.scss";

export default function ContactUs(props) {
  return (
    <div id="contact-us">
      <div className="heading">
        <h1>
          Contact <span>Us</span>
        </h1>
      </div>
      <Fade effect="top">
        <h2 className="justify-text-center">
          Use this short form to share some details on your company’s
          challenges. We’ll follow up quickly to discuss
        </h2>
      </Fade>
      <Container className="contact-container d-flex justify-content-between">
        <Row className="w-100" sm={1} xs={1} lg={2} md={2}>
          <Col className="contact-info">
            <div className="d-flex mt-1 mb-3">
              <div className="d-flex">
                <MdLocationOn size={35} className="mr-2 mt-2" />
              </div>
              <div>
                <h4>Corporate Office</h4>
                <div className="mb-2">Khasra no 205-206, Govind Mohalla,</div>
                <div className="mb-2">Haiderpur, Delhi - 110088</div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="d-flex">
                <FaWarehouse size={35} className="mr-2 mt-2" />
              </div>
              <div>
                <h4>Warehouse Address</h4>
                <div className="mb-2">Khasra no 205-206, Govind Mohalla,</div>
                <div className="mb-2">Haiderpur, Delhi - 110088</div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="d-flex">
                <FcPhoneAndroid size={35} className="mr-2" />
              </div>
              <div>
                <h4>Phone</h4>
                <div className="mb-2">
                  <a href="tel:+919953204151">+919953204151</a>
                </div>
                <div>
                  <a href="tel:+919711817208">+919711817208</a>
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="d-flex">
                <AiOutlineMail size={35} className="mr-2 mt-2" />
              </div>
              <div>
                <h4>Email Address</h4>
                <a href="mailto:info@moderngodaam.com" className="mb-4">
                  info@moderngodaam.com
                </a>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="d-flex">
                <BsClockFill size={35} className="mr-2 mt-2" />
              </div>
              <div>
                <h4>Work Timings</h4>
                <div className="mb-2">
                  <strong>Mon-Sat</strong> 9:30AM - 6:30PM,
                </div>
                <div>
                  <strong>Sunday</strong> 9:30AM - 1:30PM
                </div>
              </div>
            </div>
          </Col>
          <Col className="contact-form">
            <Form>
              <Row sm={1} xs={1} lg={2} md={2}>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="First Name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Last Name"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Phone Number"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Company Name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>Current E-Commerce Platform</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Current E-Commerce Platform"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="name">
                    <Form.Label>Expected Monthly Shipments</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Expected Monthly Shipments"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="name">
                <Form.Label>Additional Requirements</Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  type="text"
                  placeholder="Additional Requirements"
                />
              </Form.Group>
              <div className="d-flex justify-content-center mt-2">
                <CustomButton buttonText="request a quote" />
              </div>
              <p className="text-center mt-1">
                A fulfillment expert will get back to you shortly
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
