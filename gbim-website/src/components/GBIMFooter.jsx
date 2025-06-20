import React from 'react';
import logo from "../images/logo.png";
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsInstagram, BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs';

const GBIMFooter = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', paddingTop: '40px', borderTop: '1px solid #ddd' }}>
      <Container>
        <Row className="pb-4">
          
          <Col md={4} sm={12} className="mb-4">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img src={logo} alt="GBIM Logo" width="120" height="40" style={{ marginRight: '10px' }} />
            </div>
            <p><FaMapMarkerAlt style={{ marginRight: '5px' }} /> <strong>HEAD OFFICE</strong></p>
            <p style={{ margin: 0 }}>
              1404-1405, Rupa Solitaire,<br />
              Sector-1, Millenium Business Park,<br />
              Mahape, Navi Mumbai,<br />
              Maharashtra (400 710), INDIA.
            </p>
          </Col>

          
          <Col md={3} sm={6} className="mb-4">
            <h6><strong>OTHER BRANCH</strong></h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>Pune</li>
              <li>Bangalore</li>
              <li>Vadodara</li>
              <li>Delhi</li>
            </ul>
          </Col>

          
          <Col md={2} sm={6} className="mb-4">
            <h6><FaEnvelope /> <strong>sales@gbim.com</strong></h6>
            <p><FaPhoneAlt /> <strong>Schedule A Call</strong></p>
          </Col>

          {/* Badges */}
          <Col md={3} sm={12} className="mb-4 d-flex flex-wrap justify-content-start align-items-center gap-2">
            <img src="/google-partner.png" alt="Google Partner" width="50" />
            <img src="/google-ads.png" alt="Google Ads Certified" width="50" />
            <img src="/google-analytics.png" alt="Google Analytics" width="50" />
            <img src="/trusted.png" alt="Most Trusted" width="50" />
          </Col>
        </Row>

        {/* Footer Bottom Row */}
        <Row className="pt-3 border-top">
          <Col md={6} sm={12} className="text-center text-md-start mb-2">
            <small>©Copyright 2025 GBIM™. All rights reserved</small>
          </Col>
          <Col md={4} sm={12} className="text-center text-md-start mb-2">
            <small>
              Important Notice: Beware of Job Offer Scams - <span style={{ color: 'red' }}>Click Here</span>
            </small>
          </Col>
          <Col md={2} sm={12} className="text-center text-md-end">
            <span>Follow Us: </span>
            <BsInstagram style={{ margin: '0 5px' }} />
            <BsFacebook style={{ margin: '0 5px' }} />
            <BsTwitter style={{ margin: '0 5px' }} />
            <BsYoutube style={{ margin: '0 5px' }} />
            <BsLinkedin style={{ margin: '0 5px' }} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default GBIMFooter;
