import { TopTrack } from '@/models/stuffs';

export const getUsersTopArtists = async (
  accessToken: any
): Promise<TopTrack[]> => {
  const res = await fetch(`https://api.spotify.com/v1/me/top/artists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data.items;
};
