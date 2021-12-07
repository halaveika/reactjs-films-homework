import React from 'react';
import { create, act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';

const setCurrentPage = jest.fn().mockImplementation(()=>true);
const setFilter = jest.fn().mockImplementation(()=>true);
const setSearchValue = jest.fn().mockImplementation(()=>true);

describe('test Header component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Header component', () => {
    let component;
    const isInitialisated = false;
    act(() => {
      component = create(
        <BrowserRouter>
          <Header
            setCurrentPage={setCurrentPage}
            setFilter={setFilter}
            setSearchValue={setSearchValue}
          />
        </BrowserRouter>,
      );
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('input should handle onclick', () => {
    let component;
    const isInitialisated = false;
    act(() => {
      component = create(<BrowserRouter>
        <Header
          setCurrentPage={setCurrentPage}
          setFilter={setFilter}
          setSearchValue={setSearchValue}
        />
      </BrowserRouter>);
    });
    const { root } = component;
    const button = root.findAllByType('button')[0];

    (async () => {
      await act(() => {
        button.props.onClick();
        expect(setCurrentPage).toHaveBeenCalledWith();
        expect(setFilter).toBeCalled();
        expect(setSearchValue).toBeCalled();
      });
    });
  });
});
