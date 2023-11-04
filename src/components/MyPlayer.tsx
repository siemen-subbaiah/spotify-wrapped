'use client';

import { TopArtist, TopTrack, UserProfile } from '@/models/stuffs';
import MyComposition from '@/remotion/MyComposition';
import { Player } from '@remotion/player';
import React from 'react';

const MyPlayer = ({
  title,
  userProfile,
  tracks,
  artists,
}: {
  title: string;
  userProfile: UserProfile;
  tracks: TopTrack[];
  artists: TopArtist[];
}) => {
  return (
    <Player
      component={MyComposition}
      inputProps={{ title, userProfile, tracks, artists }}
      durationInFrames={400}
      compositionWidth={1080}
      compositionHeight={1920}
      fps={30}
      controls
      style={{ width: '100%' }}
    />
  );
};

export default MyPlayer;
