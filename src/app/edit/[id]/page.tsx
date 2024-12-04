import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Profile } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import EditProfileForm from '@/components/EditProfileForm';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection'; // Ensure this import is correct

interface EditProfilePageProps {
  params: {
    id: string;
  };
}

export default async function EditProfilePage({ params }: EditProfilePageProps) {
  // Authenticate the session
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  // Parse and validate the ID parameter
  const id = Number(params.id);
  if (Number.isNaN(id)) {
    return notFound(); // Handle invalid ID gracefully
  }

  // Fetch the profile
  const profile: Profile | null = await prisma.profile.findUnique({
    where: { id },
  });

  if (!profile) {
    return notFound();
  }

  // Render the Edit Profile Form
  return (
    <main>
      <EditProfileForm profile={profile} />
    </main>
  );
}
