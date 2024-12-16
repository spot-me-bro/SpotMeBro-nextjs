import * as Yup from 'yup';
import { WorkoutType } from '@prisma/client';

const workoutValues = Object.values(WorkoutType);

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditProfileSchema = Yup.object({
  id: Yup.number().required(),
  email: Yup.string().email().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  bio: Yup.string().required(),
  type: Yup.string().oneOf(workoutValues).required(),
  owner: Yup.string().required(),
});

export const EditWorkoutSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().required(),
  type: Yup.string().oneOf(workoutValues).required(),
  difficulty: Yup.string().oneOf(['Beginner', 'Intermediate', 'Advanced']).default('Beginner'),
  exercises: Yup.array().of(
    Yup.object({
      name: Yup.string().required(),
      sets: Yup.number().min(1).required(),
      reps: Yup.string().required(),
    }),
  ).default([]),
  author: Yup.string().required(),
  createdAt: Yup.date().default(() => new Date()),
});
