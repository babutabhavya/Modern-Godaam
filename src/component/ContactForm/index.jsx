import React, { useState } from "react";
import { Form, Row, Col, Dropdown } from "react-bootstrap";
import { submitContactForm } from "../../api";
import { validateContactFormPayload } from "../../helper";
import CustomButton from "../CustomButton/index";
import "./styles.scss";

export default function ContactForm(props) {
  const { setAlertMessage, setAlertVariant, setShowAlert } = props;
  const [fullName, setFullName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [companyName, setCompanyName] = useState(undefined);
  const [eCommercePlatform, setECommercePlatform] = useState(undefined);
  const [expectedMonthlyShipments, setExpectedMonthlyShipments] = useState(
    undefined
  );
  const [additionalRequirements, setAdditionalRequirements] = useState(
    undefined
  );

  const handleSubmit = async () => {
    const validationResult = validateContactFormPayload({
      fullName,
      email,
      phoneNumber,
      companyName,
      eCommercePlatform,
      expectedMonthlyShipments,
      additionalRequirements,
    });
    if (validationResult.error) {
      setShowAlert(true);
      setAlertVariant("danger");
      setAlertMessage(validationResult.error);
    } else {
      const result = await submitContactForm({
        fullName,
        email,
        phoneNumber,
        companyName,
        eCommercePlatform,
        expectedMonthlyShipments,
        additionalRequirements,
      });
      if (result.status === 200) {
        setShowAlert(true);
        setAlertVariant("success");
        setAlertMessage(
          "Your response has been submitted. We will get in touch with you shortly."
        );
        setAdditionalRequirements(undefined);
        setCompanyName(undefined);
        setEmail(undefined);
        setPhoneNumber(undefined);
        setFullName(undefined);
        setExpectedMonthlyShipments(undefined);
        setECommercePlatform(undefined);
      } else {
        setShowAlert(true);
        setAlertVariant("danger");
        setAlertMessage("Oops, this is embarrasing. Please try again.");
      }
    }
    setTimeout(() => {
      setShowAlert(false);
      setAlertVariant(null);
      setAlertMessage(null);
    }, 5000);
  };

  return (
    <>
      <Col className="contact-form-col">
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(event) =>
                    setFullName(
                      event.target.value === "" ? undefined : event.target.value
                    )
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} sm={1} lg={2} md={2}>
            <Col>
              <Form.Group>
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value === "" ? undefined : event.target.value
                    )
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Phone Number"
                  required
                  value={phoneNumber}
                  onChange={(event) =>
                    setPhoneNumber(
                      event.target.value === "" ? undefined : event.target.value
                    )
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row xs={1} sm={1} lg={2} md={2}>
            <Col>
              <Form.Group>
                <Form.Label>Company Name*</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Company Name"
                  required
                  value={companyName}
                  onChange={(event) =>
                    setCompanyName(
                      event.target.value === "" ? undefined : event.target.value
                    )
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>E-Commerce Platform</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle>
                    {eCommercePlatform || "Select Value"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {[
                      "Flipkart",
                      " Myntra",
                      " Amazon",
                      "TataCliq",
                      "TataCliq Luxury",
                      " Snapdeal",
                    ].map((element) => (
                      <Dropdown.Item
                        key={element}
                        onClick={() => setECommercePlatform(element)}
                      >
                        {element}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Expected Monthly Shipments</Form.Label>
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Expected Monthly Shipments"
                  value={expectedMonthlyShipments}
                  onChange={(event) =>
                    setExpectedMonthlyShipments(
                      event.target.value === "" ? undefined : event.target.value
                    )
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>Additional Requirements</Form.Label>
            <Form.Control
              size="lg"
              as="textarea"
              type="text"
              placeholder="Additional Requirements"
              value={additionalRequirements}
              onChange={(event) =>
                setAdditionalRequirements(
                  event.target.value === "" ? undefined : event.target.value
                )
              }
            />
          </Form.Group>
          <p className="text-center">* Fields are mandatory</p>
          <div className="d-flex justify-content-center">
            <CustomButton
              buttonText="request a quote"
              handleSubmit={handleSubmit}
            />
          </div>
          <p className="text-center mt-1">
            A fulfillment expert will get back to you shortly
          </p>
        </Form>
      </Col>
    </>
  );
}
