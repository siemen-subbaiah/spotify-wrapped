import React from 'react';
import { Composition } from 'remotion';
import MyComposition from './MyComposition';
import {
  defaultTopArtists,
  defaultTopTracks,
  defaultUserProfile,
} from '@/lib/helper';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id='Empty'
        component={MyComposition}
        durationInFrames={200}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          title: '',
          userProfile: defaultUserProfile(),
          artists: defaultTopArtists(),
          tracks: defaultTopTracks(),
        }}
      />
    </>
  );
};
