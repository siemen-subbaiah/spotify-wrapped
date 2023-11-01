'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
  const router = useRouter();

  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const REDIRECT_URI =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_HOSTED_URL
      : process.env.NEXT_PUBLIC_LOCAL_URL;

  const scope = 'user-read-private user-read-email user-top-read';

  const handleLogin = () => {
    const endpoint = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}`;

    router.push(endpoint);
  };

  return (
    <section className='flex items-center justify-center h-screen'>
      <button
        className='px-3 border border-green-500 py-1 text-green-500 hover:text-white hover:bg-green-500 rounded-md'
        onClick={handleLogin}
      >
        Login with spotify
      </button>
    </section>
  );
};

export default Login;
