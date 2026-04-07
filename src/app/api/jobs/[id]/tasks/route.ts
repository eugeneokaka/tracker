import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request, props: { params: Promise<{ id: string }> }) {
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

    const jobId = params.id;
    const body = await req.json();
    const { title, description } = body;

    if (!title) {
      return new NextResponse('Title is required', { status: 400 });
    }

    // Ensure job exists
    const job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job) {
      return new NextResponse('Job not found', { status: 404 });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status: 'PENDING',
        jobId,
        creatorId: user.id
      },
      include: {
        creator: true
      }
    });

    // Recalculate percentage
    const allTasks = await prisma.task.findMany({ where: { jobId } });
    const total = allTasks.length;
    const completed = allTasks.filter(t => t.status === 'COMPLETED').length;
    const percentageCompleted = total > 0 ? (completed / total) * 100 : 0;
    
    await prisma.job.update({
      where: { id: jobId },
      data: { percentageCompleted }
    });

    return NextResponse.json(task);
  } catch (error) {
    console.error('[TASKS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
