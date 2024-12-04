'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const workouts = [
	{
	  type: 'PUSH',
	  levels: [
		{
		  difficulty: 'Beginner',
		  exercises: [
			{ name: 'Incline Push-Ups', sets: 3, reps: '10-12' },
			{ name: 'Knee Push-Ups', sets: 3, reps: '10-12' },
			{ name: 'Dumbbell Overhead Press', sets: 3, reps: '8-10' },
			{ name: 'Tricep Dips on Chair', sets: 3, reps: '8-10' },
		  ],
		},
		{
		  difficulty: 'Intermediate',
		  exercises: [
			{ name: 'Flat Push-Ups', sets: 4, reps: '10-12' },
			{ name: 'Incline Dumbbell Bench Press', sets: 3, reps: '8-12' },
			{ name: 'Arnold Press', sets: 3, reps: '8-10' },
			{ name: 'Skull Crushers', sets: 3, reps: '10-12' },
		  ],
		},
		{
		  difficulty: 'Advanced',
		  exercises: [
			{ name: 'Weighted Push-Ups', sets: 4, reps: '10-15' },
			{ name: 'Barbell Bench Press', sets: 4, reps: '6-8' },
			{ name: 'Seated Dumbbell Shoulder Press', sets: 3, reps: '8-10' },
			{ name: 'Dips (Parallel Bars)', sets: 3, reps: '12-15' },
		  ],
		},
	  ],
	},
	{
	  type: 'PULL',
	  levels: [
		{
		  difficulty: 'Beginner',
		  exercises: [
			{ name: 'Resistance Band Rows', sets: 3, reps: '10-12' },
			{ name: 'Superman Hold (Back Extensions)', sets: 3, reps: '30 sec' },
			{ name: 'Dumbbell Bicep Curls', sets: 3, reps: '10-12' },
			{ name: 'Face Pulls with Bands', sets: 3, reps: '10-12' },
		  ],
		},
		{
		  difficulty: 'Intermediate',
		  exercises: [
			{ name: 'Inverted Rows', sets: 4, reps: '8-10' },
			{ name: 'Single-Arm Dumbbell Row', sets: 3, reps: '8-10 per side' },
			{ name: 'Chin-Ups (Assisted if needed)', sets: 3, reps: '6-8' },
			{ name: 'Barbell Curls', sets: 3, reps: '10-12' },
		  ],
		},
		{
		  difficulty: 'Advanced',
		  exercises: [
			{ name: 'Pull-Ups (Weighted Optional)', sets: 4, reps: '8-10' },
			{ name: 'Bent-Over Barbell Rows', sets: 4, reps: '6-8' },
			{ name: 'T-Bar Rows or Chest-Supported Rows', sets: 3, reps: '8-10' },
			{ name: 'Hammer Curls (Heavy)', sets: 3, reps: '8-10' },
		  ],
		},
	  ],
	},
	{
	  type: 'LEGS',
	  levels: [
		{
		  difficulty: 'Beginner',
		  exercises: [
			{ name: 'Bodyweight Squats', sets: 3, reps: '10-15' },
			{ name: 'Glute Bridges', sets: 3, reps: '10-15' },
			{ name: 'Step-Ups (on a sturdy surface)', sets: 3, reps: '8-10 per leg' },
			{ name: 'Calf Raises', sets: 3, reps: '15-20' },
		  ],
		},
		{
		  difficulty: 'Intermediate',
		  exercises: [
			{ name: 'Dumbbell Goblet Squats', sets: 4, reps: '8-10' },
			{ name: 'Romanian Deadlifts (Dumbbells)', sets: 3, reps: '8-10' },
			{ name: 'Walking Lunges', sets: 3, reps: '10-12 per leg' },
			{ name: 'Seated or Standing Calf Raises (Weighted)', sets: 4, reps: '15-20' },
		  ],
		},
		{
		  difficulty: 'Advanced',
		  exercises: [
			{ name: 'Barbell Back Squats', sets: 4, reps: '5-8' },
			{ name: 'Deadlifts (Conventional or Romanian)', sets: 4, reps: '6-8' },
			{ name: 'Bulgarian Split Squats (Weighted)', sets: 3, reps: '8-10 per leg' },
			{ name: 'Calf Raises (Heavy Load)', sets: 4, reps: '20-25' },
		  ],
		},
	  ],
	},
	{
	  type: 'FULL-BODY',
	  levels: [
		{
		  difficulty: 'Beginner',
		  exercises: [
			{ name: 'Bodyweight Squats', sets: 3, reps: '10-12' },
			{ name: 'Incline Push-Ups', sets: 3, reps: '10-12' },
			{ name: 'Superman Hold (Back)', sets: 3, reps: '30 sec' },
			{ name: 'Mountain Climbers', sets: 3, reps: '20-30 sec' },
		  ],
		},
		{
		  difficulty: 'Intermediate',
		  exercises: [
			{ name: 'Kettlebell/Dumbbell Deadlifts', sets: 4, reps: '8-10' },
			{ name: 'Push-Ups (Flat)', sets: 3, reps: '10-15' },
			{ name: 'Bent-Over Dumbbell Rows', sets: 3, reps: '8-12' },
			{ name: 'Jump Squats', sets: 3, reps: '12-15' },
		  ],
		},
		{
		  difficulty: 'Advanced',
		  exercises: [
			{ name: 'Barbell Deadlifts', sets: 4, reps: '6-8' },
			{ name: 'Weighted Dips (Chest-Focused)', sets: 3, reps: '10-12' },
			{ name: 'Pull-Ups (Weighted)', sets: 4, reps: '6-8' },
			{ name: 'Burpees with Jump Squat', sets: 4, reps: '15-20' },
		  ],
		},
	  ],
	},
	{
	  type: 'CARDIO',
	  levels: [
		{
		  difficulty: 'Beginner',
		  exercises: [
			{ name: 'Treadmill', duration: '20-30 minutes' },
			{ name: 'Jumping Jacks', sets: 3, reps: '30 sec' },
			{ name: 'Jump Rope', sets: 3, reps: '30 sec' },
			{ name: 'High Knees (Moderate)', sets: 3, reps: '20-30 sec' },
		  ],
		},
		{
		  difficulty: 'Intermediate',
		  exercises: [
			{ name: 'Jogging/Running', reps: '20-30 minutes' },
			{ name: 'Burpees', sets: 3, reps: '10-12' },
			{ name: 'Jump Rope', sets: 3, reps: '1-2 minutes' },
			{ name: 'Mountain Climbers', sets: 3, reps: '30 sec' },
		  ],
		},
		{
		  difficulty: 'Advanced',
		  exercises: [
			{ name: 'HIIT Sprints', sets: 8, reps: '20 sec sprint, 40 sec rest' },
			{ name: 'Rowing Machine or Assault Bike', reps: '15-20 minutes at high intensity' },
			{ name: 'Jump Rope', sets: 5, reps: '1-2 minutes' },
			{ name: 'Box Jumps or Plyo Push-Ups', sets: 3, reps: '10-15' },
		  ],
		},
	  ],
	},
  ];
const ListWorkouts: React.FC = () => (
  <div
    className="list-workouts-page"
    style={{
      backgroundImage: 'url(/ListWorkouts.avif)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}
  >
    <Container className="py-5">
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
    </Container>
  </div>
);

export default ListWorkouts;
