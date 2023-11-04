import React from 'react';
import { AbsoluteFill } from 'remotion';

const Welcome = ({ title }: { title: string }) => {
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
          color: 'black',
          textAlign: 'center',
        }}
      >
        Welcome, {title}
      </div>
    </AbsoluteFill>
  );
};

export default Welcome;
