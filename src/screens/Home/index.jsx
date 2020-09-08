import React from "react";
import Header from "../../component/Header";
import { Image, Carousel, Col } from "react-bootstrap";
import CustomButton from "../../component/CustomButton/index";
import AboutUs from "../../component/AboutUs/index";
import ContactUs from "../../component/ContactUs/index";
import Footer from "../../component/Footer/index";
import Why from "../../component/Why/index";
import { isMobile } from "react-device-detect";
import "./styles.scss";
import Services from "../../component/Services";
import { Fade } from "react-reveal";
import FulfillmentServices from "../../component/Fulfillment Services";
import Packaging from "../../component/Packaging/index";

export default function Home(props) {
  return (
    <>
      <Header />
      <Carousel controls={false} indicators={false} className="carousel-home">
        <Carousel.Item className="d-flex">
          <Col sm={4} className="p-0"></Col>
          <Col sm={8} className="p-0">
            <Image
              src={require("../../assets/images/home-page.png")}
              className="image-banner"
            />
          </Col>
          <Carousel.Caption className="text-left pl-4">
            <div className="banner-content">
              <Fade left>
                <h2> Guiding You Through Fulfilment</h2>
                <hr className="sep-1" />
                <h4 className="mt-2">
                  Fullfillment services for India’s leading players, e-commerce
                  solutions, working with the best of logistics service to help
                  your business grow.
                </h4>
                <div className="d-flex justify-content-center">
                  <CustomButton buttonText="get started" />
                </div>
              </Fade>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Services isMobile={props.isMobile} />
      <Packaging isMobile={props.isMobile} />
      <FulfillmentServices isMobile={props.isMobile} />
      <Why isMobile={props.isMobile} />
      <AboutUs />
      <ContactUs />
      <Footer isMobile={isMobile} />
    </>
  );
}
