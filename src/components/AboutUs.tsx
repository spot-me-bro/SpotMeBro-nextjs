'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUs: React.FC = () => (
  <div className="about-us-page">
    <div className="about-us-content">
      <Container className="py-5">
        <Row className="mb-4">
          <Col>
            <h1 className="display-4 fw-bold text-center">About Us</h1>
            <p className="text-center text-muted">
              Welcome to SpotMeBro! Your ultimate hub for connecting with gym partners, discovering workouts, and conquering your fitness goals—together.
            </p>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  At SpotMeBro, we aim to create a community where fitness enthusiasts can connect, collaborate, and succeed together. Whether you're looking for a spotter or motivation, we've got your back!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Why Choose Us?</Card.Title>
                <Card.Text>
                  SpotMeBro is more than just a gym partner finder. We provide tools to manage your workouts, track progress, and share achievements with like-minded individuals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <Card.Title>Our Vision</Card.Title>
                <Card.Text>
                  We believe that fitness is better together. Our vision is to create a healthier, stronger world by fostering a supportive community for everyone, from beginners to experts.
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
