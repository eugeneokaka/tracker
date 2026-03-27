import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import OnboardingClient from './OnboardingClient';

export default async function OnboardingPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const userInDb = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (userInDb) {
    redirect('/');
  }

  return <OnboardingClient />;
}
