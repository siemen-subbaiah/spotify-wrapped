import { cookies } from 'next/headers';
import React from 'react';
import Logout from './Logout';

const NavBar = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  return (
    <nav className='px-4 md:px-40 py-5 flex items-center justify-between'>
      <h1 className='text-2xl'>Spotify Dev Wrapped</h1>
      {accessToken && <Logout />}
    </nav>
  );
};

export default NavBar;
