import React from 'react';
import renderer from 'react-test-renderer';
import InfoBar from '..';

const mockData = {
  original_title: 'the jungle book',
  genres: [{
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
  vote_average: 4.8,
  runtime: 139,
  overview: 'There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding',
};

describe('test InfoBar component', () => {
  const component = renderer.create(
    <InfoBar
      original_title={mockData.original_title}
      genres={mockData.genres}
      vote_average={mockData.vote_average}
      runtime={mockData.runtime}
    />,
  );
  const tree = component.toJSON();
  it('should render InfoBar component', () => {
    expect(tree).toMatchSnapshot();
  });
});
