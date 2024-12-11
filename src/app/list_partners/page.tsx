import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import ListPartners from '@/components/ListPartners';

const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const userEmail = session?.user?.email;
  const userProf = userEmail
    ? await prisma.profile.findUnique({
      where: { email: userEmail },
    })
    : null; // Find the profile associated with the user's email
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
};

export default ListPage;
