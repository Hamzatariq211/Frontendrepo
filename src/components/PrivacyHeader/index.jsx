import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import { Col, Container } from "react-bootstrap";

const PrivacyHeader = () => {
  return (
    <div className="privacy-header">
      <Container>
        <div className=" d-flex flex-column gap-5">
          <div className="d-flex justify-content-center align-items-center">
            <Col xs={9} sm={8}  xl={7}>
              <p className="text-lg">
                Privacy Policy & Data Collection and Usage
              </p>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyHeader;
