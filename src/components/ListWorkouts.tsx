'use client';

import { WorkoutType } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
// import { DateTime } from 'next-auth/providers/kakao';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
// add Col, Card from bootstrap

interface ListWorkoutsProps {
  workout: {
    id: number;
    title: string;
    type: WorkoutType;
    difficulty: string
    exercises: JsonValue;
    author: string;
    createdAt: Date;
  } | null;
}

// Helper function used to go from workout type to the a string value to be displayed
// function converter(type: WorkoutType | undefined): string {
//   if (type === undefined) {
//     return 'admin';
//   }
//   switch (type) {
//     case 'push': return 'push';
//     case 'pull': return 'pull';
//     case 'legs': return 'legs';
//     case 'full': return 'full';
//     case 'cardio': return 'cardio';
//     default: return 'admin';
//   }
// }
const ListWorkouts: React.FC<ListWorkoutsProps> = ({ workout }) => (
  <div
    className="list-workouts-page"
    style={{
      backgroundImage: 'url(/ListWorkouts.avif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}
  >
    <Container>
      <Row>
        <div>
          {workout?.author}
        </div>
        <div>
          {workout?.title}
        </div>
        <div>
          {workout?.type}
        </div>
      </Row>
    </Container>
    {/* <Container className="py-5">
      <Row>
        <Col>
          <h1 className="text-center text-black display-4">Workouts</h1>
          <p className="text-center text-dark">
            Browse through a variety of workouts based on your fitness goals and skill level.
          </p>
        </Col>
      </Row>
      {workouts.map((workout) => (
        <Row key={workout.type} className="my-4">
          <Col>
            <h2 className="text-black">{workout.type} Workouts</h2>
            {workout.levels.map((level) => (
              <Card className="mb-4 shadow-sm" key={level.difficulty}>
                <Card.Body>
                  <Card.Title className="text-dark">{level.difficulty} Level</Card.Title>
                  <ul>
                    {level.exercises.map((exercise, index) => (
                      <li key={index}>
                        {exercise.name}: {exercise.sets} sets x {exercise.reps} reps
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      ))}
    </Container> */}
  </div>
);

export default ListWorkouts;
