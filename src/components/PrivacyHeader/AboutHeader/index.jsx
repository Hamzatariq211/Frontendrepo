import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import { Col, Container } from "react-bootstrap";

const AboutHeader = () => {
  return (
    <div className="about-header">
      <Container className=" d-flex flex-column gap-5">
        <Navbar theme="dark"/>
        <div className="d-flex flex-column gap-3">
          <Col lg={8}>
            <div className="d-flex align-items-center gap-3">
              <div className="border-left"></div>
              <h1 className="text-lg">
                What Is FusionFlare Technologies, and How Did the Journey Begin?
              </h1>
            </div>
          </Col>
          <p className="text-xs">
            FusionFlare Technologies is a startup founded by a group of
            dedicated students from the National University of Computer &
            Emerging Sciences. With a shared determination to enhance the
            computing world, the team set out to offer innovative and effective
            solutions that push the boundaries of technology. Their mission is
            to make a meaningful impact on the digital landscape by combining
            their expertise in computing with a vision for a better, more
            connected world.
          </p>

          <div className="d-flex gap-3">
            <button className="btn-services">Services</button>
            <button className="btn-contact">Contact US</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutHeader;
