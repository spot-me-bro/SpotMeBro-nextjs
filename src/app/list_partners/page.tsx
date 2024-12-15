import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import ListPartners from '@/components/ListPartners';

/** Render a list of profiles for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  // Get the current user's email and use that to find their profile

  const userEmail = session?.user?.email;
  const userProf = userEmail
    ? await prisma.profile.findUnique({
      where: { email: userEmail },
    })

    : null;
  // Get a list of profiles filtered by the type that the current user has selected
  const profiles = userProf?.type
    ? await prisma.profile.findMany({
      where: { type: userProf.type },
    })
    : []; // Get all the profiles with the same type as the current users type declared in their profile
  for (let i = 0; i < profiles.length; i++) {
    if (profiles[i].owner === userEmail) {
      profiles.splice(i, 1);
      break;
    }
  } // Remove the current user from the list of profiles of the same type, so a user can't match with themselves
  return <ListPartners profiles={profiles} />;

  }
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1>Potential Partners</h1>
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
