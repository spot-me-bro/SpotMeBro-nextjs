'use client';

import { Workout } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import EditWorkoutForm from './EditWorkoutForm';

interface EditWorkoutProps {
  workouts: Workout[];
}

// A helper component used to find the correct profile based on the url provied by admin page.tsx
const EditWorkoutRouter = ({ workouts }: EditWorkoutProps) => {
  const searchParams = useSearchParams();
  const [workout, setWorkout] = useState<Workout | null>(null);

  useEffect(() => {
    const workoutId = parseInt(searchParams.get('id') || '', 10);
    if (!Number.isNaN(workoutId)) {
      const foundProfile = workouts.find((p) => p.id === workoutId);
      setWorkout(foundProfile || null);
    } else {
      setWorkout(null);
    }
  }, [searchParams, workouts]);

  if (!workout) {
    return <p>Profile not found.</p>;
  }

  return <EditWorkoutForm workout={workout} />;
};

export default EditWorkoutRouter;
