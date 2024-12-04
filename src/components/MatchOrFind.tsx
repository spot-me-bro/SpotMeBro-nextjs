'use client';

import '../app/globals.css'; // Import the CSS file
import { Button, Col, Container, Row } from 'react-bootstrap';

const MatchOrFind: React.FC = () => (
  <Container fluid className="d-flex flex-column justify-content-center align-items-center vh-100">
    <h1 className="heading mb-4">Please select one of the two choices</h1>
    <Row className="justify-content-center">
      <Col xs="auto">
        <Button href="/#" className="match-or-find-button">
          Match Gym Bros
        </Button>
      </Col>
      <Col xs="auto">
        <Button href="/#" className="match-or-find-button">
          Find Workouts
        </Button>
      </Col>
    </Row>
  </Container>
);

export default MatchOrFind;
