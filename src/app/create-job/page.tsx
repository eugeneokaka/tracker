import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import CreateJobForm from '@/app/create-job/CreateJobForm';

export default async function CreateJobPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="w-full max-w-2xl mx-auto pt-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900">Create New Job</h1>
        <p className="text-zinc-500 text-sm mt-1">Fill out the details to add a new task to your organizational workflow.</p>
      </div>
      
      <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
        <CreateJobForm />
      </div>
    </div>
  );
}
