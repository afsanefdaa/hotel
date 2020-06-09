import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './component';

test('Snapshot testing', () => {
  const component = renderer.create(
    <Icon text="rating" value={3.20} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
