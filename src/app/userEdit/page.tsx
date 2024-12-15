import EditProfileForm from '@/components/EditProfileForm';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

export default async function EditCurrentUserProfile(): Promise<JSX.Element> {
  // Validate session
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return notFound();
  }
  // Get the current profile of the user bassed of the session
  try {
    const profile = await prisma.profile.findUnique({
      where: { email: session.user.email },
    });
    if (!profile) {
      return notFound();
    }
    return (
      <main>
        <EditProfileForm profile={profile} />
      </main>
    );
  } catch (error) {
    console.error('Failed to fetch profile:', error);
    return notFound();
  }
}
