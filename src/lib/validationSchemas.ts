import * as Yup from 'yup';

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

export const EditProfileSchema = Yup.object().shape({
  id: Yup.number().required(),
  email: Yup.string().email().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  bio: Yup.string().required(),
  image: Yup.string().nullable(),
  tYpe: Yup.string().required(), // Assuming type is a string
  owner: Yup.string().required(),
});

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  bio: string;
}
