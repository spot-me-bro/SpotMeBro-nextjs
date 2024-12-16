import { PrismaClient, Role, WorkoutType } from '@prisma/client';
import { hash } from 'bcrypt';
import * as config from '../config/settings.development.json';

const prisma = new PrismaClient();

async function main() {
  // Adding users, and sepcifiying if they are admins or not
  console.log('Seeding the database');
  const password = await hash('changeme', 10);
  config.defaultUsers.forEach(async (account) => {
    let role: Role = 'USER';
    if (account.role === 'ADMIN') {
      role = 'ADMIN';
    }
    console.log(`  Creating user: ${account.email} with role: ${role}`);
    await prisma.user.upsert({
      where: { email: account.email },
      update: {},
      create: {
        email: account.email,
        password,
        role,
      },
    });
  });
  // Adding the default profiles, the switch statement translates the workout type enum to a string
  config.defaultProfiles.forEach(async (prof) => {
    let style: WorkoutType;
    switch (prof.type) {
      case 'push':
        style = 'push';
        break;
      case 'pull':
        style = 'pull';
        break;
      case 'legs':
        style = 'legs';
        break;
      case 'full':
        style = 'full';
        break;
      default:
        style = 'cardio';
        break;
    }
    console.log(`  Adding profile: ${prof.firstName}, ${prof.lastName} (${prof.owner})`);
    await prisma.profile.upsert({
      where: { email: prof.email },
      update: {},
      create: {
        email: prof.email,
        firstName: prof.firstName,
        lastName: prof.lastName,
        bio: prof.bio,
        owner: prof.owner,
        type: style,
      },
    });
  });
  // Adding the default workouts
  config.defaultWorkouts.forEach(async (workout) => {
    console.log(workout.type);
    let style: WorkoutType;
    switch (workout.type) {
      case 'push':
        style = 'push';
        break;
      case 'pull':
        style = 'pull';
        break;
      case 'legs':
        style = 'legs';
        break;
      case 'full':
        style = 'full';
        break;
      default:
        style = 'cardio';
        break;
    }
    console.log(style);
    console.log(`  Adding workout: ${workout.title} written by ${workout.author}`);
    await prisma.workout.upsert({
      where: { title: workout.title },
      update: {},
      create: {
        title: workout.title,
        type: style,
        difficulty: workout.difficulty,
        exercises: workout.exercises,
        author: workout.author,
      },
    });
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
