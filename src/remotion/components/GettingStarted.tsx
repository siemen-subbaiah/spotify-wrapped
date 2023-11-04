import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from 'remotion';

const GettingStarted = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 60], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 100,
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          opacity,
          color: 'black',
          textAlign: 'center',
        }}
      >
        So lets get started
      </div>
    </AbsoluteFill>
  );
};

export default GettingStarted;
