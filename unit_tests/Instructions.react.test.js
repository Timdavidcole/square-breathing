import React from 'react';
import Instructions from '../src/Components/Instructions';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Instructions />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});