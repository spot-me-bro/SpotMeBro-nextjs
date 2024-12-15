import WorkoutDropdown from '@/components/WorkoutDropdown';
import authOptions from '@/lib/authOptions';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { Container } from 'react-bootstrap';

const prisma = new PrismaClient();

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
