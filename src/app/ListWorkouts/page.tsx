import ListWorkouts from '@/components/ListWorkouts';
import { PrismaClient } from '@prisma/client';
// import { getServerSession } from 'next-auth';

const prisma = new PrismaClient(); // Start a new prisma session

const ListWorkoutsPage = async () => {
  // const session = await getServerSession();
  // const currentUser = session?.user?.email; // Get current users email bassed on the session data

  const workouts = await prisma.workout.findMany();
  // Find the matching profile associated with the current user, as of right now this is done by matching emails
  return <ListWorkouts workout={workouts[0]} />;
};

export default ListWorkoutsPage;
