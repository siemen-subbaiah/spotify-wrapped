import React from 'react';
import { AbsoluteFill, Sequence } from 'remotion';
import { linearTiming, TransitionSeries } from '@remotion/transitions';
import { slide } from '@remotion/transitions/slide';
import GettingStarted from './components/GettingStarted';
import Intro from './components/Intro';
import Welcome from './components/Welcome';
import { loadFont } from '@remotion/google-fonts/Poppins';
import { TopArtist, TopTrack, UserProfile } from '@/models/stuffs';
import TopGenres from './components/TopGenres';

const MyComposition = ({
  userProfile,
  tracks,
  artists,
}: {
  title: string;
  userProfile: UserProfile;
  tracks: TopTrack[];
  artists: TopArtist[];
}) => {
  const { fontFamily } = loadFont();

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 100,
        backgroundColor: 'white',
        fontFamily,
      }}
    >
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={110}>
          <Intro />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide()}
          timing={linearTiming({ durationInFrames: 30 })}
        />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Welcome title={userProfile?.display_name} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <Sequence from={150}>
        <GettingStarted />
      </Sequence>
      <Sequence from={250}>
        <TopGenres artists={artists} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default MyComposition;
