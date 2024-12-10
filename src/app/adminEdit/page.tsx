import { prisma } from '@/lib/prisma';
import EditProfileFormAdmin from '@/components/EditProfileForm-Admin';

export default async function AdminEditPage(): Promise<JSX.Element> {
  const profiles = await prisma.profile.findMany();
  // Get all profiles
  if (!profiles) {
    throw new Error('Failed to fetch profiles');
  }

  return (
    <main>
      <EditProfileFormAdmin profiles={profiles} />
    </main>
  );
}
