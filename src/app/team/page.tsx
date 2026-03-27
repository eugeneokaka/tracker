import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TeamList from "@/app/team/TeamList";

export const dynamic = 'force-dynamic';

export default async function TeamPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  // Fetch the requesting user to check permissions if we want
  const currentUser = await prisma.user.findUnique({
    where: { clerkId: userId }
  });

  const allUsers = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="w-full h-full flex flex-col">
      <TeamList initialUsers={allUsers} currentUserRole={currentUser?.role || 'USER'} />
    </div>
  );
}
