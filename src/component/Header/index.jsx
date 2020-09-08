import React from "react";
import { Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import { Link } from "react-scroll";
import "./styles.scss";

export default function Header() {
  return (
    <Navbar expand="lg" className="position-fixed header w-100">
      <Navbar.Brand href="#home" className="header-logo h-100">
        <Image alt="Brand Logo" src={require("../../assets/logo/logo.png")} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="header-nav h-100 wide box concave">
        <div className="l"></div>
        <Nav>
          <Link>HOME</Link>
          <NavDropdown title="SERVICES" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Link to="about-us" smooth={true} offset={-100}>
                Packaging
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              <Link to="fulfillment-services" smooth={true} offset={-100}>
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
  );
}
