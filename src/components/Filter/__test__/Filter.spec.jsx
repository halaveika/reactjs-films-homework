import React from 'react';
import { create } from 'react-test-renderer';
import Filter from '..';

const mockFilterProps = {
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
  filter: 'TRENDING',
  getContent: jest.fn(),
  GetGenres: jest.fn(),
  setFilter: jest.fn(),
  setCurrentPage: jest.fn(),
  setGenre: jest.fn(),
  setListFlexDirection: jest.fn()
};

describe('test Filter component', () => {

  it('should render Filter component', () => {
    const component = create(
          <Filter
            genres={mockFilterProps.genres}
            setGenre={mockFilterProps.setGenre}
            activeGenre={mockFilterProps.activeGenre}
            setFilter={mockFilterProps.setFilter}
            filter={mockFilterProps.filter}
            setCurrentPage={mockFilterProps.setCurrentPage}
            setListFlexDirection={mockFilterProps.setListFlexDirection}
          />,
      );
     const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
