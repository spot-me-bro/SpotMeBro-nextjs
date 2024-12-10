import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';

export default async function EditStuffPage({ params }: { params: { id: string | string[] } }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);
  console.log(id);

  return (
    <main>
      <h1>
        Testing to see if anythign is working
      </h1>
    </main>
  );
}

// import { getServerSession } from 'next-auth';
// import { notFound } from 'next/navigation';
// import { Profile } from '@prisma/client';
// import { loggedInProtectedPage } from '@/lib/page-protection';
// import { prisma } from '@/lib/prisma';
// import EditProfileForm from '@/components/EditProfileForm';
// import authOptions from '@/lib/authOptions';

// interface PageProps {
//   params: { id: string };
// }

// export default async function EditProfilePage({ params }: PageProps) {
//   // Protect the page, only logged in users can access it.
//   const session = await getServerSession(authOptions);
//   loggedInProtectedPage(
//     session as {
//       user: { email: string; id: string; randomKey: string };
//     } | null,
//   );

//   const id = Number(params.id);

//   const profile: Profile | null = await prisma.profile.findUnique({
//     where: { id },
//   });

//   if (!profile) {
//     return notFound();
//   }

//   return (
//     <main>
//       <EditProfileForm profile={profile} />
//     </main>
//   );
// }
