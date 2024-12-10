'use client';

import EditProfileForm from '@/components/EditProfileForm';
import { Profile } from '@prisma/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface EditProfileFormAdminProps {
  profiles: Profile[];
}

// A helper component used to find the correct profile based on the url provied by admin page.tsx
const EditProfileFormAdmin = ({ profiles }: EditProfileFormAdminProps) => {
  const searchParams = useSearchParams();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const profileId = parseInt(searchParams.get('id') || '', 10);
    if (!Number.isNaN(profileId)) {
      const foundProfile = profiles.find((p) => p.id === profileId);
      setProfile(foundProfile || null);
    } else {
      setProfile(null);
    }
  }, [searchParams, profiles]);

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return <EditProfileForm profile={profile} />;
};

export default EditProfileFormAdmin;
