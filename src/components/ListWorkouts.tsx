'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Dropdown, DropdownButton } from 'react-bootstrap';

// Define the Workout type interface based on your JSON structure
interface Workout {
  title: string;
  type: string;
  difficulty: string;
  exercises: { name: string; sets: number; reps: string }[];
  author: string;
  id: number;
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
            <Dropdown.Item eventKey="Push">Push</Dropdown.Item>
            <Dropdown.Item eventKey="Pull">Pull</Dropdown.Item>
            <Dropdown.Item eventKey="Legs">Legs</Dropdown.Item>
            <Dropdown.Item eventKey="Full">Full Body</Dropdown.Item>
            <Dropdown.Item eventKey="Cardio">Cardio</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>

      {/* Display filtered workouts */}
      <Row>
        {filteredWorkouts.map((workout) => (
          <Col key={workout.id} xs={12} md={6} lg={4} className="mb-4">
            {/* Add h-100 and flex classes */}
            <Card className="h-100 d-flex flex-column">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{workout.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Difficulty: {workout.difficulty}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Exercises:</strong>
                </Card.Text>
                <ul>
                  {workout.exercises.map((exercise) => (
                    <li key={exercise.name + workout.id}>
                      {exercise.name}: {exercise.sets} sets x {exercise.reps} reps
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListWorkouts;
