import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const Logout = () => {
  const handleLogout = async () => {
    'use server';
    cookies().delete('accessToken');
    redirect('/login');
  };

  return (
    <form action={handleLogout}>
      <button className='px-3 py-2 rounded-md bg-white text-black'>
        Logout
      </button>
    </form>
  );
};

export default Logout;
