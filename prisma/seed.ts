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
        firstName: account.firstName || null,
        lastName: account.lastName || null,
        bio: account.bio || null,
      },
    });
  });
  // Adding the default profiles, the switch statement translates the workout type enum to a string
  config.defaultProfiles.forEach(async (prof, index) => {
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
        id: index,
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
        description: workout.description,
        author: workout.author,
        type: style,
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

// Just in case everything breaks nd we want to reference back
/*
config.defaultData.forEach(async (data, index) => {
    let condition: Condition = 'good';
    if (data.condition === 'poor') {
      condition = 'poor';
    } else if (data.condition === 'excellent') {
      condition = 'excellent';
    } else {
      condition = 'fair';
    }
    console.log(`  Adding stuff: ${data.name} (${data.owner})`);
    await prisma.stuff.upsert({
      where: { id: index + 1 },
      update: {},
      create: {
        name: data.name,
        quantity: data.quantity,
        owner: data.owner,
        condition,
      },
    });
  });
  */
