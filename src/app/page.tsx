import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import JobList from "./JobList";

export default async function Home() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const currentUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  const technicians = await prisma.user.findMany({
    where: { role: "TECHNICIAN" },
    select: { id: true, firstName: true, lastName: true },
    orderBy: { firstName: "asc" },
  });

  const supervisors = await prisma.user.findMany({
    where: { role: "SUPERVISOR" },
    select: { id: true, firstName: true, lastName: true },
    orderBy: { firstName: "asc" },
  });

  return (
    <div className="w-full h-full flex flex-col">
      <JobList
        initialJobs={[]}
        currentUserId={currentUser?.id || ""}
        technicians={technicians}
        supervisors={supervisors}
        isAdmin={currentUser?.role === 'ADMIN'}
      />
    </div>
  );
}