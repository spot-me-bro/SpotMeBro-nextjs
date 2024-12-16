import WorkoutDropdown from '@/components/WorkoutDropdown';
import authOptions from '@/lib/authOptions';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';

// The landing page after a user signs in, lets the user choose what type of workout they want to work on that day
const Dropdown = () => (
  <main>
    <Container className="py-3">
      <WorkoutDropdown />
    </Container>
  </main>
);

export default async function Dropdown(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);
  const currentUser = session?.user?.email; // Get current users email bassed on the session data

  let profile = null;
  if (currentUser) {
    profile = await prisma.profile.findUnique({
      where: { email: currentUser },
    });
  }
  return (
    <main>
      <Container className="py-3">
        <WorkoutDropdown profile={profile} />
      </Container>
    </main>
  );
}
