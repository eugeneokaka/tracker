import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';



export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const jobId = searchParams.get("jobId")?.trim();
    const tenderNo = searchParams.get("tenderNo")?.trim();
    const firm = searchParams.get("firm")?.trim();

    let whereClause: any = undefined;

    if (jobId || tenderNo || firm) {
      const filters = [];

      if (jobId) {
        filters.push({ id: jobId });
      }

      if (tenderNo) {
        filters.push({
          tenderNo: {
            contains: tenderNo,
            mode: "insensitive",
          },
        });
      }

      if (firm) {
        filters.push({
          firm: {
            contains: firm,
            mode: "insensitive",
          },
        });
      }

      whereClause = { OR: filters };
    }

    const jobs = await prisma.job.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      take: 10, // Limit to maximum 10 jobs
      include: {
        creator: true,
        technician: true,
        supervisor: true,
      },
    });

    const formattedJobs = jobs.map((job) => ({
      ...job,
      contract: Number(job.contract),
    }));

    return NextResponse.json(formattedJobs);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch jobs" },
      { status: 500 }
    );
  }
}

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
      return new NextResponse('User not found in database. Please log in again.', { status: 404 });
    }

    const body = await req.json();
    const { tenderNo, firm, contract, description, notes, technicianId, supervisorId } = body;

    const job = await prisma.job.create({
      data: {
        tenderNo,
        firm,
        contract,
        description,
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
