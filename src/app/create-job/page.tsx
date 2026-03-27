import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import CreateJobForm from '@/app/create-job/CreateJobForm';

export default async function CreateJobPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  // Fetch users with specific roles to pass directly to the client form
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

  return (
    <div className="min-h-[80vh] flex flex-col items-center pt-8 md:pt-16 px-4">
      <div className="w-full max-w-2xl bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-zinc-200 bg-zinc-50 px-6 py-5">
          <h1 className="text-xl font-semibold text-zinc-900">Create New Job</h1>
          <p className="text-sm text-zinc-500 mt-1">Fill out the details below to assign a new task.</p>
        </div>
        <div className="p-6">
          <CreateJobForm technicians={technicians} supervisors={supervisors} />
        </div>
      </div>
    </div>
  );
}
