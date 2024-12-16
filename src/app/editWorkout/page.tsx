import { prisma } from '@/lib/prisma';
import EditWorkoutRouter from '@/components/EditWorkoutRouter';

export default async function AdminEditPage(): Promise<JSX.Element> {
  const workouts = await prisma.workout.findMany();
  // Get all profiles
  if (!workouts) {
    throw new Error('Failed to fetch profiles');
  }

  return (
    <main>
      <EditWorkoutRouter workouts={workouts} />
    </main>
  );
}
