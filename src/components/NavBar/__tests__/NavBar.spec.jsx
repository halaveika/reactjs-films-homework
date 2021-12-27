import React from 'react';
import { create, act } from 'react-test-renderer';
import '../../../utils/matchMedia';
import NavBar from '..';

const mockData = {
  overview: 'There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding',
};

describe('test NavBar component', () => {
  it('should render NavBar component', () => {
    const component = create(
      <NavBar
        overview={mockData.overview}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handleVisibleChange should change state', () => {
    const { root } = create(
      <NavBar
        overview={mockData.overview}
      />,
    );
    expect(root.instance.state.visible).toBe(false);
    act(() => { root.findAllByType('button')[1].props.onClick(); });
    expect(root.instance.state.visible).toBe(true);
  });
});
