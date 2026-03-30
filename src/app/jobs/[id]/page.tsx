import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import JobDetailClient from "./JobDetailClient";

export const dynamic = 'force-dynamic';

export default async function JobDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const currentUser = await prisma.user.findUnique({
    where: { clerkId: userId }
  });

  const job = await prisma.job.findUnique({
    where: { id: params.id },
    include: {
      creator: true,
      technician: true,
      supervisor: true,
    }
  });

  if (!job) {
    return (
      <div className="p-8 text-center text-zinc-500">
        Job not found.
      </div>
    );
  }

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

  const canEdit = job.creatorId === currentUser?.id || currentUser?.role === 'ADMIN';

  const serializedJob = {
    ...job,
    contract: Number(job.contract)
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-8 px-4">
      <JobDetailClient 
        initialJob={serializedJob as any} 
        canEdit={canEdit}
        technicians={technicians}
        supervisors={supervisors}
      />
    </div>
  );
}
