const mockState = {
  content: {
    results: [{
      id: 2412412,
      title: 'Fight club',
      genre_ids: [13, 20, 21],
      vote_average: 8,
      poster_path: 'image_path',
      overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 41412,
      title: 'Sopranos',
      genre_ids: [13, 18],
      vote_average: 10,
      poster_path: 'image_path',
      overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    }],
    page: 1,
    total_pages: 12,
    total_results: 55,
    genres_array: [{
      id: 13,
      name: 'Adventure',
    }, {
      id: 18,
      name: 'Drama',
    }, {
      id: 20,
      name: 'Family',
    }, {
      id: 21,
      name: 'Fantasy',
    }],
    video_url: 'test_url',
    details: {
      id: 2412412,
      title: 'Fight club',
      runtime: 120,
      vote_average: 10,
      poster: 'image_path',
      overview: 'Lorem Ipsum is simply dummy text of the printing',
    },
    isInitialisated: false,
  },
};

export default mockState
