'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditWorkoutSchema } from '@/lib/validationSchemas';
import { EditWorkout } from '@/lib/dbActions';

const onSubmit = async (data: any) => {
  await EditWorkout(data);
  swal('Success', 'Your workout has been updated', 'success', {
    timer: 2000,
  });
};

const EditWorkoutForm = ({ workout }: { workout: any }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EditWorkoutSchema),
  });

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center">
            <h2>Edit Workout</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register('id')} value={workout.id} />
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <input
                    type="text"
                    defaultValue={workout.title}
                    {...register('title')}
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.title?.message}</div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <select
                    {...register('type')}
                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                    defaultValue={workout.type}
                  >
                    <option value="push">Push</option>
                    <option value="pull">Pull</option>
                    <option value="legs">Legs</option>
                    <option value="full">Full</option>
                    <option value="cardio">Cardio</option>
                  </select>
                  <div className="invalid-feedback">{errors.type?.message}</div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Difficulty</Form.Label>
                  <select
                    {...register('difficulty')}
                    className={`form-control ${errors.difficulty ? 'is-invalid' : ''}`}
                    defaultValue={workout.difficulty}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                  <div className="invalid-feedback">{errors.difficulty?.message}</div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Exercises:</Form.Label>
                  {workout.exercises.map((exercise: any, index: number) => (
                    <div key={exercise + workout} className="exercise-row" style={{ marginBottom: '40px' }}>
                      <Form.Label>Exercise Name</Form.Label>
                      <Form.Control
                        type="text"
                        {...register(`exercises.${index}.name`)}
                        defaultValue={exercise.name}
                        placeholder="Exercise Name"
                        className={`form-control ${errors.exercises?.[index]?.name ? 'is-invalid' : ''}`}
                      />
                      <Form.Label>Number of Sets</Form.Label>
                      <Form.Control
                        type="number"
                        {...register(`exercises.${index}.sets`)}
                        defaultValue={exercise.sets}
                        placeholder="Sets"
                        className={`form-control ${errors.exercises?.[index]?.sets ? 'is-invalid' : ''}`}

                      />
                      <Form.Label>Number of Reps</Form.Label>
                      <Form.Control
                        type="text"
                        {...register(`exercises.${index}.reps`)}
                        defaultValue={exercise.reps}
                        placeholder="Reps"
                        className={`form-control ${errors.exercises?.[index]?.reps ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.exercises?.[index]?.name?.message}</div>
                      <div className="invalid-feedback">{errors.exercises?.[index]?.sets?.message}</div>
                      <div className="invalid-feedback">{errors.exercises?.[index]?.reps?.message}</div>
                    </div>
                  ))}
                </Form.Group>

                <Form.Group>
                  <Form.Label>Author</Form.Label>
                  <input
                    type="text"
                    defaultValue={workout.author}
                    {...register('author')}
                    className={`form-control ${errors.author ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.author?.message}</div>
                </Form.Group>

                <Form.Group>
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EditWorkoutForm;
