import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
      return new NextResponse('User not found', { status: 404 });
    }

    const body = await req.json();
    const { firstName, lastName } = body;

    if (!firstName || !lastName) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    const email = user.emailAddresses[0]?.emailAddress;

    if (!email) {
      return new NextResponse('User has no email', { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (existingUser) {
      return NextResponse.json(existingUser);
    }

    const newUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email,
        firstName,
        lastName,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error('[ONBOARDING_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
