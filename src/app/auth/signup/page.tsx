'use client';

import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Card, Col, Container, Button, Form, Row } from 'react-bootstrap';
import { createUser, createProfile } from '@/lib/dbActions';

type SignUpForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
};

/** The sign up page. */
const SignUp = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must not exceed 50 characters'),
    lastName: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must not exceed 50 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email must end with @hawaii.edu'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), ''], 'Confirm Password does not match'),
    bio: Yup.string()
      .required('Bio is required')
      .min(2, 'Describe a little about yourself'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SignUpForm) => {
    await createUser(data);
    await createProfile(data);
    await signIn('credentials', { callbackUrl: '/WorkoutDropdown', ...data });
  };

  return (
    <main>
      <Container>
        <Row className="justify-content-center">
          <Col xs={5}>
            <h1 className="text-center">Sign Up</h1>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* First Name Field */}
                  <Form.Group className="form-group">
                    <Form.Label>First Name</Form.Label>
                    <input
                      type="text"
                      {...register('firstName')}
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.firstName?.message}</div>
                  </Form.Group>
                  {/* Last Name Field */}
                  <Form.Group className="form-group">
                    <Form.Label>Last Name</Form.Label>
                    <input
                      type="text"
                      {...register('lastName')}
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.lastName?.message}</div>
                  </Form.Group>

                  {/* Email Field */}
                  <Form.Group className="form-group">
                    <Form.Label>Email</Form.Label>
                    <input
                      type="text"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group className="form-group">
                    <Form.Label>Password</Form.Label>
                    <input
                      type="password"
                      {...register('password')}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                  </Form.Group>

                  {/* Confirm Password Field */}
                  <Form.Group className="form-group">
                    <Form.Label>Confirm Password</Form.Label>
                    <input
                      type="password"
                      {...register('confirmPassword')}
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                  </Form.Group>
                  {/* Create Bio Field */}
                  <Form.Group className="form-group">
                    <Form.Label>Bio</Form.Label>
                    <input
                      type="bio"
                      {...register('bio')}
                      className={`form-control ${errors.bio ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.bio?.message}</div>
                  </Form.Group>
                  {/* Buttons */}
                  <Form.Group className="form-group py-3">
                    <Row>
                      <Col>
                        <Button type="submit" className="btn btn-primary">
                          Register
                        </Button>
                      </Col>
                      <Col>
                        <Button type="button" onClick={() => reset()} className="btn btn-warning float-right">
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                Already have an account?
                <a href="/auth/signin">Sign in</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignUp;
