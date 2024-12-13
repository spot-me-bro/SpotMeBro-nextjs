'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs: React.FC = () => (
  <div className="about-us-page">
    <div className="about-us-content">
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-4 fw-bold text-center">Key Features</h1>
            <p className="text-center text-muted">
              Welcome to SpotMeBro! Your ultimate hub for connecting with gym partners,
              discovering workouts, and conquering your fitness goals—together.
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Gym Partner Matching</Card.Title>
                <Card.Text>
                  Find like-minded gym partners based on fitness level, experience, and workout preferences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Profile Customization</Card.Title>
                <Card.Text>
                  Create a profile that showcases your fitness goals, achievements, and availability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Workout Plans</Card.Title>
                <Card.Text>
                  Browse curated workout plans tailored to your fitness level and goals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default AboutUs;
