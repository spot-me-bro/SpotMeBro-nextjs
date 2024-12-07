import React from 'react';
import ListWorkouts from '@/components/ListWorkouts';

// Import your JSON workout data
import workoutData from '../../../config/settings.development.json';

const Page: React.FC = () => {
  const workouts = workoutData.defaultWorkouts; // Access the "defaultWorkouts" array

  return (
    <div>
      <h1 className="text-center my-4">Workout List</h1>
      <ListWorkouts workouts={workouts} />
    </div>
  );
};

export default Page;
