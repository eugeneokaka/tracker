import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    });

    if (!user) {
      return new NextResponse('User not found in database', { status: 404 });
    }

    const body = await req.json();
    const { customerName, customerPhone, item, problem, notes, technicianId, supervisorId } = body;

    const job = await prisma.job.create({
      data: {
        customerName,
        customerPhone,
        item,
        problem,
        notes,
        status: 'PENDING',
        creatorId: user.id,
        technicianId: technicianId || null,
        supervisorId: supervisorId || null,
      }
    });

    return NextResponse.json(job);
  } catch (error) {
    console.error('[JOBS_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
