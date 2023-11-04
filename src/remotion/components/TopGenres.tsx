import { TopArtist } from '@/models/stuffs';
import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

const TopGenres = ({ artists }: { artists: TopArtist[] }) => {
  const genres = [...new Set(artists.map((item) => item.genres).flat())].slice(
    0,
    5
  );

  const frame = useCurrentFrame();

  const deterMineOpacity = (i: number) => {
    switch (i) {
      case 0:
        return interpolate(frame, [0, 50], [0, 1], {
          extrapolateRight: 'clamp',
        });
      case 1:
        return interpolate(frame, [0, 60], [0, 1], {
          extrapolateRight: 'clamp',
        });
      case 2:
        return interpolate(frame, [0, 70], [0, 1], {
          extrapolateRight: 'clamp',
        });
      case 3:
        return interpolate(frame, [0, 80], [0, 1], {
          extrapolateRight: 'clamp',
        });
      case 4:
        return interpolate(frame, [0, 90], [0, 1], {
          extrapolateRight: 'clamp',
        });
    }
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '50px',
      }}
    >
      <div>Your Top Genres :</div>
      <div
        style={{
          marginTop: '300px',
        }}
      >
        {genres.map((item, i) => {
          return (
            <div style={{ opacity: deterMineOpacity(i) }} key={i}>
              {i + 1}. {item}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

export default TopGenres;
