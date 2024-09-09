import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import SugBlogs from "../../components/SugBlogs";
import BlogDetails from "../../components/BlogDetails";
import TrendingBlogs from "../../components/TrendingBlogs";
import "bootstrap/dist/css/bootstrap.min.css";
const BlogsPage = () => {
  return (
    <div className="blogs">
      <Container>
        <div className="d-flex flex-column gap-4">
          <h4 className="text-lg">Blogs</h4>
          <Row className="gy-3 gx-5">
            <Col lg={4} xl={3} className="order-1 order-lg-0">
              <div className="d-flex flex-column gap-5">
                <SugBlogs />
                <TrendingBlogs />
              </div>
            </Col>
            <Col lg={8}>
              <BlogDetails />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BlogsPage;
