'use client';
import SignInOrOut from '@/components/SignInOrOut';
import { SignIn, SignOut, useUser } from '@monocloud/nextjs-auth/client';
import { useEffect, useState } from 'react';

export default function FetchProtectedData() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/protected-data');
        setData(JSON.stringify(await response.json()));
      } catch {
        setData("You're not signed in!");
      }
    };
    fetchData();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Fetch Protected Data</h1>
      <pre>{data}</pre>
      <SignInOrOut />
    </main>
  );
}
