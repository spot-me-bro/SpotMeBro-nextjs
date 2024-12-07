'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton } from 'react-bootstrap';

// Define the Workout type interface based on your JSON structure
interface Workout {
  title: string;
  type: string;
  difficulty: string;
  exercises: { name: string; sets: number; reps: string }[];
  author: string;
}

// Props for ListWorkouts
interface ListWorkoutsProps {
  workouts: Workout[];
}

const ListWorkouts: React.FC<ListWorkoutsProps> = ({ workouts }) => {
  const [filteredWorkouts, setFilteredWorkouts] = useState<Workout[]>(workouts);
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelect = (eventKey: string | null) => {
    if (eventKey) {
      setSelectedType(eventKey);

      // Filter workouts based on the selected type
      const filtered = workouts.filter((workout) => workout.type === eventKey.toLowerCase());
      setFilteredWorkouts(filtered);
    }
  };

  return (
    <Container>
      {/* Dropdown to filter workouts */}
      <div className="d-flex justify-content-center my-4">
        <Dropdown onSelect={handleSelect}>
          <DropdownButton variant="outline-dark" title={selectedType || 'Select workout type'}>
            <Dropdown.Item eventKey="push">Push</Dropdown.Item>
            <Dropdown.Item eventKey="pull">Pull</Dropdown.Item>
            <Dropdown.Item eventKey="legs">Legs</Dropdown.Item>
            <Dropdown.Item eventKey="full">Full Body</Dropdown.Item>
            <Dropdown.Item eventKey="cardio">Cardio</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>

      {/* Display filtered workouts */}
      <Row>
        {filteredWorkouts.map((workout, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{workout.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Difficulty: {workout.difficulty}</Card.Subtitle>
                <Card.Text>
                  <strong>Exercises:</strong>
                  <ul>
                    {workout.exercises.map((exercise, idx) => (
                      <li key={idx}>
                        {exercise.name} - {exercise.sets} sets x {exercise.reps} reps
                      </li>
                    ))}
                  </ul>
                </Card.Text>
                <Card.Footer className="text-muted">Author: {workout.author}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListWorkouts;
