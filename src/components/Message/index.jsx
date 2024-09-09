import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../assets/images/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
const Message = () => {
  return (
    <div className="message pb-5">
      <Container>
        <h3>Message From CEO</h3>
        <Row className="g-3 items-center">
          <Col xl={6}>
            <div className="flex justify-center">
              <div className="flex justify-center">
               
                <img src={profile} alt="" />
              </div>
            </div>
            <h6 className="text-center">Ali Musharaf</h6>
          </Col>
          <Col xl={6}>
            <div className="">
              <p>
                At FusionFlare Technologies, we believe that our mission goes
                beyond merely providing IT services—we aim to create a lasting
                impact on the world. As the CEO, I am committed to leading a
                company that not only delivers top-quality, internationally
                recognized tech products but also pioneers solutions that set
                new standards in the industry.
              </p>
              <p>
                {" "}
                Our focus is on innovation that transcends conventional
                expectations. FusionFlare products are designed not just to meet
                market needs but to exceed them, offering solutions that
                genuinely make a difference in people&apos;s lives. We strive to
                revolutionize how IT is perceived and how projects are executed,
                ensuring that every FusionFlare product stands out as a beacon
                of excellence and a testament to our commitment to quality and
                innovation.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Message;
