import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const users = await prisma.user.findMany({});
  const profiles = await prisma.profile.findMany({});
  const workouts = await prisma.workout.findMany({});

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>List Users Admin</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>List Profiles Admin</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Current Type</th>
                  <th>Bio</th>
                  <th>Owner</th>
                  <th>Edit Content</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((prof) => (
                  <tr key={prof.id}>
                    <td>{prof.email}</td>
                    <td>{prof.firstName}</td>
                    <td>{prof.lastName}</td>
                    <td>{prof.type}</td>
                    <td>{prof.bio}</td>
                    <td>{prof.owner}</td>
                    <td>
                      <a href={`/admin/EditProfilePage/${prof.id}`}>Edit</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>List Workouts Admin</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Difficulty</th>
                  <th>Type</th>
                  <th>Exercises</th>
                  <th>Author</th>
                  <th>Current Type</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout) => (
                  <tr key={workout.id}>
                    <td>{workout.title}</td>
                    <td>{workout.description}</td>
                    <td>{workout.author}</td>
                    <td>{workout.type}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

/*
Finished updating seed.ts file, data is correctly being seeded and is accessible. See test in /app/admin/page
*/

export default AdminPage;
