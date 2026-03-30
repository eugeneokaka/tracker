import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import JobList from "./JobList";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { userId } = await auth();
  if (!userId) {
    redirect('/sign-in');
  }

  const currentUser = await prisma.user.findUnique({
    where: { clerkId: userId }
  });

  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      creator: true,
      technician: true,
      supervisor: true,
    }
  });

  const technicians = await prisma.user.findMany({
    where: { role: 'TECHNICIAN' },
    select: { id: true, firstName: true, lastName: true },
    orderBy: { firstName: 'asc' }
  });

  const supervisors = await prisma.user.findMany({
    where: { role: 'SUPERVISOR' },
    select: { id: true, firstName: true, lastName: true },
    orderBy: { firstName: 'asc' }
  });

  // Convert Decimals to numbers for client component to prevent rendering issues
  const initialJobs = jobs.map((job) => ({
    ...job,
    contract: Number(job.contract)
  }));

  return (
    <div className="w-full h-full flex flex-col">
      <JobList 
        initialJobs={initialJobs as any} 
        currentUserId={currentUser?.id || ''}
        technicians={technicians}
        supervisors={supervisors}
      />
    </div>
  );
}
