import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./footer.css";

const Footer = () => {
    const year =new Date().getFullYear()


  return (
    <footer id="Footer">
      <Container>
        <Row className="py-3">
          <Col md={6} className="py-3">
            <Link to="/admin">
              <h3 className="text-danger">
                <i className="now-ui-icons users_circle-08 mr-2"></i>Admin Panel
              </h3>
            </Link>
            <h4 className="text-danger">CLZ Online Laundry Service</h4>
            <p className="text-white">Email: clz.support@gmail.com</p>
            <p className="text-white">Phone: +254 768 444 197</p>
          </Col>
          <Col md={3} className="py-3">
            <ul className="list-unstyled">
              <li className="py-2">
                <a href="/help">Get Help</a>
              </li>
              <li className="py-2">
                <a href="/faq">Read FAQ</a>
              </li>
              <li className="py-2">
                <a href="/templates">View All Templates</a>
              </li>
              <li className="py-2">
                <a href="/aboutus">About Us</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="py-3">
            <ul className="list-unstyled">
              <li className="py-2">
                <a href="/policy">Privacy Policy</a>
              </li>
              <li className="py-2">
                <a href="/cookie">Cookie Policy</a>
              </li>
              <li className="py-2">
                <a href="/terms">Terms of Use</a>
              </li>
              <li className="py-2">
                <a href="/contacts">Contact Us</a>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom d-flex justify-content-center">
          <p className="text-secondary">
            Copyright &copy; {year} Developed by Group D_Devs{" "}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
