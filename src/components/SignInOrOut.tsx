'use client';

import { SignIn, SignOut, useUser } from '@monocloud/nextjs-auth/client';

export default function SignInOrOut() {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? (
    <SignOut className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign Out
    </SignOut>
  ) : (
    <SignIn className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign In
    </SignIn>
  );
}
