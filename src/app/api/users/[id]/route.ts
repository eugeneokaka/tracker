import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const VALID_ROLES = ['ADMIN', 'TECHNICIAN', 'SUPERVISOR', 'USER'];

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
    const { role } = body;

    if (!role || !VALID_ROLES.includes(role)) {
      return new NextResponse('Invalid Role', { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: params.id,
      },
      data: {
        role,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('[USER_PATCH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
