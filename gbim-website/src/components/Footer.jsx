import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <Container>
        <Row>
          <Col md={2}>
            <h5 className="fw-bold border-bottom pb-2">DIGITAL MARKETING</h5>
            <ul className="list-unstyled">
              <li>SEO</li>
              <li>Social Media Marketing</li>
              <li>Design Thinking</li>
              <li>Video Production</li>
              <li>ORM</li>
              <li>Content Marketing</li>
              <li>Influencer Marketing</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fw-bold border-bottom pb-2">PAID ADVERTISING</h5>
            <ul className="list-unstyled">
              <li>Social Media Ads</li>
              <li>Google Ads</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fw-bold border-bottom pb-2">MARKETING TECHNOLOGIES</h5>
            <ul className="list-unstyled">
              <li>Web Development</li>
              <li>Mobile App</li>
              <li>Website Maintenance</li>
              <li>Hosting Support</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fw-bold border-bottom pb-2">CONSULTING</h5>
            <ul className="list-unstyled">
              <li>Marketing Consulting</li>
              <li>Lead Generation</li>
              <li>SEO Outsourcing</li>
              <li>PPC Outsourcing</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fw-bold border-bottom pb-2">QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Testimonial</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Achievements</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="fw-bold border-bottom pb-2">RESOURCES</h5>
            <ul className="list-unstyled">
              <li>Case Studies</li>
              <li>Design Portfolio</li>
              <li>Blog</li>
              <li>Resources</li>
              <li>Tools</li>
              <li>Clientele</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
