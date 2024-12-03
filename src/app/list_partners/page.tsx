import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
// import { Profile } from '@prisma/client';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  // const owner = (session && session.user && session.user.email) || '';
  // console.log(stuff);
  const userEmail = session?.user?.email;
  const userProf = userEmail
    ? await prisma.profile.findUnique({
      where: { email: userEmail },
    })
    : null;
  const profiles = userProf?.type
    ? await prisma.profile.findMany({
      where: { type: userProf.type },
    })
    : [];
  // Make sure we dont show the current user's profile in the list of matches
  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].owner === userEmail) {
      profiles.splice(i, 1);
      break;
    }
  }
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>Stuff</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Current Type</th>
                  <th>Bio</th>
                  <th>Owner</th>
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

export default ListPage;
