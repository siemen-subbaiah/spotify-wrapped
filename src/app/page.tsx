import {
  getUserProfile,
  getUsersTopArtists,
  getUsersTopTracks,
} from '@/lib/fetch';
import { cookies } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const HomePage = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken')?.value;

  const userProfile = await getUserProfile(accessToken);
  const tracks = (await getUsersTopTracks(accessToken))?.slice(0, 5);
  const artists = (await getUsersTopArtists(accessToken))?.slice(0, 5);

  return (
    <main className='py-3'>
      {!accessToken ? (
        <h1 className='text-2xl'>Hello, welcome sir!</h1>
      ) : (
        <>
          <div className='mb-5'>
            <h1 className='text-2xl mb-3'>Profile</h1>
            <section className='md:flex'>
              <Image
                src={userProfile.images[1].url}
                alt={userProfile.display_name}
                width={userProfile.images[1].width}
                height={userProfile.images[1].height}
                className='rounded-full'
              />
              <div className='mt-4 md:mt-0 md:ml-10'>
                <section className='mb-4'>
                  <p className='text-xl'>{userProfile.display_name}</p>
                  <p>{userProfile.email}</p>
                </section>
                <a
                  className='text-blue-500'
                  href={userProfile.external_urls.spotify}
                >
                  Spotify profile
                </a>
                <p>User Type : {userProfile.type}</p>
              </div>
            </section>
          </div>
          <div className='mb-5'>
            <h1 className='text-2xl mb-3'>Your top 5 tracks</h1>
            <p>These are the top 5 tracks from last 6 months</p>

            <section className='my-5 grid grid-cols-3 gap-2'>
              {tracks?.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='p-3 border border-gray-400 rounded-md'
                  >
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </section>
          </div>
          <div>
            <h1 className='text-2xl mb-3'>Your top 5 artists</h1>
            <p>These are the top 5 artists from last 6 months</p>

            <section className='my-5 grid grid-cols-3 gap-2'>
              {artists.map((item) => {
                return (
                  <div
                    key={item.id}
                    className='p-3 border border-gray-400 rounded-md'
                  >
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default HomePage;
