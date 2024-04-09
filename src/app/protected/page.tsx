import { protectPage } from '@monocloud/nextjs-auth';
import { SignOut } from '@monocloud/nextjs-auth/client';

const Protected = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>If you can see this, you are logged in!</h1>
      <SignOut className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign Out
      </SignOut>
    </main>
  );
};

export default protectPage(Protected);
