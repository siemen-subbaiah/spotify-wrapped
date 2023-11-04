export const defaultUserProfile = () => {
  return {
    country: '',
    display_name: '',
    email: '',
    explicit_content: {
      filter_enabled: false,
      filter_locked: false,
    },
    external_urls: {
      spotify: '',
    },
    followers: {
      href: '',
      total: 0,
    },
    href: '',
    id: '',
    product: '',
    type: '',
    uri: '',
    images: [
      {
        height: 0,
        width: 0,
        url: '',
      },
    ],
  };
};

export const defaultTopArtists = () => {
  return [
    {
      external_urls: {
        spotify: '',
      },
      genres: [''],
      href: '',
      id: '',
      name: '',
      popularity: 0,
      type: 'string',
      uri: '',
      images: [
        {
          height: 0,
          url: '',
          width: 0,
        },
      ],
      followers: {
        total: 0,
        href: '',
      },
    },
  ];
};

export const defaultTopTracks = () => {
  return [
    {
      album_type: '',
      artists: [
        {
          external_urls: {
            spotify: '',
          },
          href: '',
          id: '',
          name: '',
          type: '',
          uri: '',
        },
      ],
      available_markets: [''],
      href: '',
      id: '',
      images: [
        {
          height: 0,
          url: '',
          width: 0,
        },
      ],
      name: '',
      release_date: '',
      release_date_precision: '',
      total_tracks: 0,
      type: '',
      uri: '',
      external_urls: {
        spotify: '',
      },
    },
  ];
};
