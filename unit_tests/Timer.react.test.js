import React from 'react';
import Timer from '../src/Components/Timer';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Timer />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});