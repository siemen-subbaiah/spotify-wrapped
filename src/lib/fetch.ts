import { TopArtist, TopTrack, UserProfile } from '@/models/stuffs';

export const getUserProfile = async (
  accessToken: string | undefined
): Promise<UserProfile> => {
  const res = await fetch(`https://api.spotify.com/v1/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getUsersTopTracks = async (
  accessToken: string | undefined
): Promise<TopTrack[]> => {
  const res = await fetch(`https://api.spotify.com/v1/me/top/tracks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data.items;
};

export const getUsersTopArtists = async (
  accessToken: string | undefined
): Promise<TopArtist[]> => {
  const res = await fetch(`https://api.spotify.com/v1/me/top/artists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await res.json();
  return data.items;
};
