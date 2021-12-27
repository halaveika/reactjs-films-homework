import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Signature from '..';

it('Signature component renders correctly', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name="Aliaksandr Halaveika" />);
  const result = renderer.getRenderOutput();

  expect(result.type).toBe('h2');
  expect(result.props.children).toEqual('Aliaksandr Halaveika');
  expect(renderer).toMatchSnapshot();
});
