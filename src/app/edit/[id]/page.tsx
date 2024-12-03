import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Profile } from '@prisma/client';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import EditProfileForm from '@/components/EditProfileForm';
import authOptions from '@/lib/authOptions';

export default async function EditProfilePage({ params }: { params: { id: string } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const id = Number(params.id);

  const profile: Profile | null = await prisma.profile.findUnique({
    where: { id },
  });

  if (!profile) {
    return notFound();
  }

  return (
    <main>
      <EditProfileForm profile={profile} />
    </main>
  );
}
