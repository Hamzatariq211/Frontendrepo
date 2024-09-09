import React from "react";
import "./style.css";
import logo from "../../assets/images/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
const WhyFusionFlare = () => {
  return (
    <Container className="why-fusion py-5">
      <Row className="items-center">
        <Col lg={4} className="flex justify-center">
          <img src={logo} alt="logo" className="" />
        </Col>
        <Col lg={8}>
          <div className="flex items-center gap-5">
          <div className="w-10 h-80 bg-black hidden md:block rounded-full"></div>
          <div className="info">
            <h1>Why FusionFlare?</h1>
            <p>
              FusionFlare Technologies is at the forefront of digital
              innovation, driven by a passion for excellence and a commitment to
              advancing the computing world. Our approach is rooted in
              delivering bespoke, high-quality solutions that are both effective
              and transformative. We combine advanced technological expertise
              with creative problem-solving to ensure that every project not
              only meets but exceeds expectations.
            </p>
            <p>
              By choosing FusionFlare, you partner with a team dedicated to
              excellence, integrity, and continuous progress. We tailor our
              services to address the unique needs of each client, offering
              solutions that are innovative and meticulously crafted. With a
              focus on client satisfaction, adaptability, and a forward-thinking
              mindset, FusionFlare Technologies is the ideal choice for those
              seeking to lead in the digital age.
            </p>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyFusionFlare;
