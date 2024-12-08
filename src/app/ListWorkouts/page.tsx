import ListWorkouts from '@/components/ListWorkouts';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Start a new prisma session

const ListWorkoutsPage = async () => {
  // Pull the raw workouts from the prisma database
  const prismaWorkouts = await prisma.workout.findMany();
  // Remap the prisma workouts into the workouts type defined in the ListWorkouts.tsx interfacece
  const workouts = prismaWorkouts.map((workout) => ({
    title: workout.title,
    type: workout.type,
    difficulty: workout.difficulty,
    exercises: workout.exercises as { name: string; sets: number; reps: string; }[],
    author: workout.author,
    id: workout.id,
  }));
  return <ListWorkouts workouts={workouts} />;
};

export default ListWorkoutsPage;
