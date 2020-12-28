import React, { useState } from "react";
import Header from "../../component/Header";
import { Image, Carousel, Col } from "react-bootstrap";
import CustomButton from "../../component/CustomButton/index";
import AboutUs from "../../component/AboutUs/index";
import ContactUs from "../../component/ContactUs/index";
import Footer from "../../component/Footer/index";
import Why from "../../component/Why/index";
import Services from "../../component/Services";
import { AttentionSeeker, Slide } from "react-awesome-reveal";
import FulfillmentServices from "../../component/Fulfillment Services";
import Packaging from "../../component/Packaging/index";
import { Link } from "react-scroll";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import "./styles.scss";

export default function Home(props) {
  const { isMobile } = props;
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertVariant, setAlertVariant] = useState(false);
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  const { title, description } = data.site.siteMetadata;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Helmet>
      <Header
        showAlert={showAlert}
        alertMessage={alertMessage}
        alertVariant={alertVariant}
        isMobile={isMobile}
      />
      <Carousel controls={false} indicators={false} className="carousel-home">
        <Carousel.Item className="d-flex">
          {!isMobile && <Col sm={4} className="p-0"></Col>}

          <Col sm={8} className="p-0">
            <Image
              src={require("../../assets/images/home-page.png")}
              className="image-banner"
            />
          </Col>
          <Carousel.Caption className="text-left p-4">
            <div className="banner-content">
              <Slide duration={300}>
                <h2> Guiding You Through Fulfilment</h2>
                <hr className="sep-1" />
                <h4 className="mt-2">
                  Fullfillment services for India’s leading players, e-commerce
                  solutions, working with the best of logistics service to help
                  your business grow.
                </h4>
              </Slide>
              <AttentionSeeker
                effect="jello"
                className="d-flex justify-content-center"
                style={{ marginTop: isMobile ? "2%" : "1rem" }}
              >
                <Link to="services" smooth offset={-100}>
                  <CustomButton buttonText="get started" />
                </Link>
              </AttentionSeeker>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Services isMobile={isMobile} />
      <Packaging isMobile={isMobile} />
      <FulfillmentServices isMobile={isMobile} />
      <Why isMobile={isMobile} title={title} />
      <AboutUs />
      <ContactUs
        isMobile={isMobile}
        setShowAlert={setShowAlert}
        setAlertVariant={setAlertVariant}
        setAlertMessage={setAlertMessage}
      />
      <Footer isMobile={isMobile} title={title} description={description} />
    </>
  );
}
