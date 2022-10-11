/**
 * @format
 */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoadingComponent from '~components/general/LoadingComponent';

it('renders correctly', () => {
  renderer.create(<LoadingComponent />);
});
