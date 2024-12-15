'use server';

import { hash } from 'bcrypt';
import { Profile } from '@prisma/client';
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
 * Creates a new profile in the database.
 * @param credentials, an object with the following properties: email, password.
 */
// Omiting the id part of the profile object
// This lets the autoincriment function in the prisma schema to be used as the id
// rather than us having to deal with it here
export async function createProfile(profile: Omit<Profile, 'id'>) {
  await prisma.profile.create({
    data: {
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      bio: profile.bio,
      type: profile.type,
      owner: profile.owner,
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
  redirect('/list');
}

export async function ChangeType(profile: Profile) {
  await prisma.profile.update({
    where: { id: profile.id },
    data: {
      type: profile.type,
    },
  });
  redirect('/MatchOrFind');
}
