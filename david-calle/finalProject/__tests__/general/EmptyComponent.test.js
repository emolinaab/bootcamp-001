/**
 * @format
 */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import EmptyComponent from '~components/general/EmptyComponent';

it('renders correctly', () => {
  renderer.create(<EmptyComponent />);
});
