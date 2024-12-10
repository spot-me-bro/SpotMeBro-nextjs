import EditProfileForm from '@/components/EditProfileForm';
import authOptions from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

export default async function EditUserProfilePage({
  searchParams,
}: {
  searchParams: { id?: string };
}): Promise<JSX.Element> {
  const profileId = Number(searchParams?.id);

  if (!profileId || Number.isNaN(profileId)) {
    return notFound();
  }

  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    console.log('failed to get id at all');
    return notFound();
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { id: profileId },
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
