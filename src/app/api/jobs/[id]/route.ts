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
