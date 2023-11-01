'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const CallBackPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');
  console.log(code);

  useEffect(() => {
    authorizeCode();
  }, [code]);

  const authorizeCode = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ code }),
    });
    const data = await res.json();

    if (data.success) {
      router.push('/');
    }
  };

  return <div>loading...</div>;
};

export default CallBackPage;
