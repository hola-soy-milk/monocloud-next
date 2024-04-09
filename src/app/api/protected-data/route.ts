import { protectApi } from '@monocloud/nextjs-auth';
import { NextResponse } from 'next/server';

export const GET = protectApi(async () => {
  return NextResponse.json({ success: 'Hello World!' });
});
