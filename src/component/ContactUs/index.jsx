import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ICONS } from "../../constants/icons";
import { Fade } from "react-awesome-reveal";
import ContactForm from "../ContactForm/index";
import "./styles.scss";

export default function ContactUs(props) {
  const { setShowAlert, setAlertVariant, setAlertMessage } = props;
  return (
    <div id="contact-us">
      <div className="heading">
        <h1>
          Contact <span>Us</span>
        </h1>
      </div>
      <Fade effect="top">
        <h2 className="justify-text-center mx-auto" style={{ width: "92vw" }}>
          Use this short form to share some details on your company’s
          challenges. We’ll follow up quickly to discuss
        </h2>
      </Fade>
      <Container className="contact-container d-flex justify-content-between">
        <Row
          className={`w-100 ${props.isMobile ? "mt-3 mx-auto" : ""}`}
          sm={1}
          xs={1}
          lg={2}
          md={2}
        >
          <Col className="contact-info">
            <div className="d-flex mt-1 mb-3">
              <div className="d-flex">
                <ICONS.WAREHOUSE size={35} className="mr-2 mt-2" />
              </div>
              <div>
                <h4>Corporate Office</h4>
                <div className="mb-2">
                  39, Govind Mohalla, Haiderpur, Delhi - 110088, India
                </div>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="d-flex">
                <ICONS.PHONE size={35} className="mr-2 mt-2" />
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
                <ICONS.MAIL size={35} className="mr-2 mt-2" />
              </div>
              <div>
                <h4>Email Address</h4>
                <a href="mailto:info@moderngodaam.com" className="mb-4">
                  info@moderngodaam.com
                </a>
              </div>
            </div>
          </Col>
          <ContactForm
            setAlertMessage={setAlertMessage}
            setAlertVariant={setAlertVariant}
            setShowAlert={setShowAlert}
          />
        </Row>
      </Container>
    </div>
  );
}
