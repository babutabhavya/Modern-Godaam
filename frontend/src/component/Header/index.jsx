import React from "react";
import { Nav, Navbar, Image, NavDropdown, Alert } from "react-bootstrap";
import { Link } from "react-scroll";
import "./styles.scss";

export default function Header(props) {
  const { showAlert, alertMessage, alertVariant, isMobile } = props;

  return (
    <>
      <Navbar expand="lg" className="header" fixed="top">
        <Navbar.Brand href="#home" className="header-logo h-100">
          <Image alt="Brand Logo" src={require("../../assets/logo/logo.png")} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="header-nav h-100 wide box concave">
          <div className="l"></div>
          <Nav>
            <Link to="___gatsby" smooth={true}>
              HOME
            </Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <Link to="packaging" smooth={true} offset={-100}>
                  Packaging
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="fulfillment" smooth={true} offset={-100}>
                  Fulfillment Services
                </Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="about-us" smooth={true} offset={-100}>
              ABOUT US
            </Link>
            <Link to="contact-us" smooth={true} offset={-100}>
              CONTACT US
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Alert
        show={showAlert}
        variant={alertVariant}
        dismissible
        style={{
          position: "fixed",
          top: isMobile ? "15vw" : "6vw",
          zIndex: 1000,
          width: "100%",
        }}
      >
        <p className="mb-0">{alertMessage}</p>
      </Alert>
    </>
  );
}
