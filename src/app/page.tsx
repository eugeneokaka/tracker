import { prisma } from "@/lib/prisma";
import JobList from "./JobList";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      creator: true,
      technician: true,
      supervisor: true,
    }
  });

  return (
    <div className="w-full h-full flex flex-col">
      <JobList initialJobs={jobs} />
    </div>
  );
}
