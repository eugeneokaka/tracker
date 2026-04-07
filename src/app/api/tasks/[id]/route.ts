import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(req: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const params = await props.params;
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    });

    if (!user) {
      return new NextResponse('User not found in database.', { status: 404 });
    }

    const taskId = params.id;
    const body = await req.json();
    const { status } = body;

    const task = await prisma.task.findUnique({
      where: { id: taskId },
      include: { job: true }
    });

    if (!task) {
      return new NextResponse('Task not found', { status: 404 });
    }

    // Determine access - must be admin, job creator, or assigned to the job.
    const isRelated = 
      user.role === 'ADMIN' || 
      task.job.creatorId === user.id || 
      task.job.technicianId === user.id || 
      task.job.supervisorId === user.id;

    if (!isRelated) {
      return new NextResponse('Unauthorized to update this task', { status: 403 });
    }

    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        status
      },
      include: {
        creator: true,
        job: true
      }
    });

    const allTasks = await prisma.task.findMany({ where: { jobId: updatedTask.jobId } });
    const total = allTasks.length;
    const completed = allTasks.filter(t => t.status === 'COMPLETED').length;
    const percentageCompleted = total > 0 ? (completed / total) * 100 : 0;

    await prisma.job.update({
      where: { id: updatedTask.jobId },
      data: { percentageCompleted }
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error('[TASK_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
