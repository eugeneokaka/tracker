import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Tender details API coming soon' });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'Tender creation API coming soon' });
}