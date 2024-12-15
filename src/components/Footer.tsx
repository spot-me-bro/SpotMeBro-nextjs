import { Container, Row, Col } from 'react-bootstrap';
import { Building, GeoAlt, Globe } from 'react-bootstrap-icons';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer style={{ backgroundColor: '#024731', color: 'white' }} className="mt-auto py-3">
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <p>©2024 | SpotMeBro. All rights reserved.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="d-flex align-items-center">
          <Building style={{ marginRight: '5px', color: 'white' }} />
          University of Hawaii
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <GeoAlt style={{ marginRight: '5px', color: 'white' }} />
          Honolulu, HI 96822
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <Globe style={{ marginRight: '5px', color: 'white' }} />
          <a
            href="https://spot-me-bro.github.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            spot-me-bro.github.io
          </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
