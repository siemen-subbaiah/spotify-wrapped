import React from 'react';
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Img,
  staticFile,
} from 'remotion';

const Intro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 100,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          color: '#fff',
          padding: '10px',
          textAlign: 'center',
          fontSize: '5rem',
        }}
      >
        <Img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' />

        <p style={{ color: 'black', marginTop: '100px' }}>
          {' '}
          Spotify Developer API wrapped
        </p>
      </div>
    </AbsoluteFill>
  );
};

export default Intro;
