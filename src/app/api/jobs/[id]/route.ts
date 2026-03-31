import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PATCH(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  try {
    const params = await props.params;
    
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Get the actual user ID from Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { id: true },
    });

    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    // Get current job to check if user is related to it
    const currentJob = await prisma.job.findUnique({
      where: { id: params.id },
      select: {
        creatorId: true,
        technicianId: true,
        supervisorId: true,
      },
    });

    if (!currentJob) {
      return new NextResponse('Job not found', { status: 404 });
    }

    // Check if user is related to the job (creator, supervisor, or technician)
    const isRelated = 
      currentJob.creatorId === user.id ||
      currentJob.technicianId === user.id ||
      currentJob.supervisorId === user.id;

    if (!isRelated) {
      return new NextResponse('Only job creator or assigned users can update this job', { status: 403 });
    }

    const body = await request.json();

    const updateData: any = {};
    if (body.status !== undefined) updateData.status = body.status;
    if (body.technicianId !== undefined) updateData.technicianId = body.technicianId === '' ? null : body.technicianId;
    if (body.supervisorId !== undefined) updateData.supervisorId = body.supervisorId === '' ? null : body.supervisorId;

    if (Object.keys(updateData).length === 0) {
      return new NextResponse('Nothing to update', { status: 400 });
    }

    const job = await prisma.job.update({
      where: {
        id: params.id,
      },
      data: updateData,
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error('[JOB_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
