import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Workout } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';

export default async function EditStuffPage({
  params,
}: {
  params: { id: string | string[] };
}) {
  // Get the server session and protect the page
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session as { user: { email: string; id: string; randomKey: string } } | null);

  // Parse the ID from params
  const id = Array.isArray(params?.id) ? Number(params.id[0]) : Number(params?.id);

  // Query the workout from the database
  const workout: Workout | null = await prisma.workout.findUnique({
    where: { id },
  });

  // Handle the case where no workout is found
  if (!workout) {
    return notFound();
  }

  // Return an empty main for now (can be expanded later)
  return <main />;
}
