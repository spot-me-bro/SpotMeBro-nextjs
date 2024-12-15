'use server';

import { hash } from 'bcrypt';
import { Profile, Workout } from '@prisma/client';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}
/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}

export async function EditProfile(profile: Profile) {
  await prisma.profile.update({
    where: { id: profile.id },
    data: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      bio: profile.bio,
    },
  });
  redirect('/list_partners');
}

export async function EditWorkout(workout: Workout) {
  const exercises = workout.exercises ?? [];

  await prisma.workout.update({
    where: { id: workout.id },
    data: {
      title: workout.title,
      type: workout.type,
      difficulty: workout.difficulty,
      exercises,
      author: workout.author,
    },
  });
  redirect('/admin');
}
