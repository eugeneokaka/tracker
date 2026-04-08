import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EditJobForm from "./EditJobForm";
import Link from "next/link";


export const dynamic = 'force-dynamic';

export default async function EditJobPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const currentUser = await prisma.user.findUnique({
    where: { clerkId: userId }
  });

  if (!currentUser) {
    redirect('/onboarding');
  }

  const job = await prisma.job.findUnique({
    where: { id: params.id }
  });

  if (!job) {
    return (
      <div className="p-8 text-center text-zinc-500">
        Job not found.
      </div>
    );
  }

  // Permissions check
  const canEdit = 
    job.creatorId === currentUser.id || 
    currentUser.role === 'ADMIN' ||
    job.technicianId === currentUser.id ||
    job.supervisorId === currentUser.id;

  if (!canEdit) {
    return (
      <div className="p-8 text-center text-red-500">
        You do not have permission to edit this job.
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

  // Serialize decimal contract to number for client component
  const serializedJob = {
    ...job,
    contract: Number(job.contract)
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-8 px-4 pb-20">
      <div className="mb-8">
        <Link 
          href={`/jobs/${job.id}`}
          className="inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors mb-6"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Job Details
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Edit Job</h1>
        <p className="text-zinc-500 mt-2">Update the details for tender {job.tenderNo}</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 md:p-8">
        <EditJobForm 
          initialJob={serializedJob as any}
          technicians={technicians}
          supervisors={supervisors}
        />
      </div>
    </div>
  );
}
