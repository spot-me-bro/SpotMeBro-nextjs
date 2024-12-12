'use client';

import React from 'react';
import { Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Profile, WorkoutType } from '@prisma/client';
import { ChangeType } from '@/lib/dbActions';

interface WorkoutDropdownProps {
  // eslint-disable-next-line react/require-default-props
  profile?: Profile | null;
}

// Helper function to convert from the dropdown selection to a workout type we can put into the database
const stringToType = (workout: string): WorkoutType | null => {
  switch (workout.toLowerCase()) {
    case 'push':
      return WorkoutType.push;
    case 'pull':
      return WorkoutType.pull;
    case 'legs':
      return WorkoutType.legs;
    case 'full body':
      return WorkoutType.full;
    case 'cardio':
      return WorkoutType.cardio;
    default:
      return null;
  }
};

const WorkoutDropdown: React.FC<WorkoutDropdownProps> = ({ profile }: WorkoutDropdownProps) => {
  const handleSubmit = async (selectedWorkout: string | null) => {
    if (profile === null || profile === undefined) {
      console.error('No Profile');
      return;
    }

    if (!selectedWorkout) {
      console.error('No workout type selected');
      return;
    }

    const selectedType = stringToType(selectedWorkout);

    if (!selectedType) {
      console.error('Invalid workout type selected');
      return;
    }

    try {
      const updatedProfile = { ...profile, type: selectedType };
      await ChangeType(updatedProfile);
    } catch (error) {
      console.error('Error updating profile type:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <div className="d-flex align-items-center">
        <Dropdown onSelect={(eventKey) => handleSubmit(eventKey)}>
          <DropdownButton variant="outline-dark" title="Select workout type">
            <Dropdown.Item eventKey="Push">Push</Dropdown.Item>
            <Dropdown.Item eventKey="Pull">Pull</Dropdown.Item>
            <Dropdown.Item eventKey="Legs">Legs</Dropdown.Item>
            <Dropdown.Item eventKey="Full body">Full body</Dropdown.Item>
            <Dropdown.Item eventKey="Cardio">Cardio</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
    </Container>
  );
};

export default WorkoutDropdown;
