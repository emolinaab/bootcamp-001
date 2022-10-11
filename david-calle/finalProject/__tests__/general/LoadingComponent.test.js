/**
 * @format
 */
import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import LoadingComponent from '~components/general/LoadingComponent';

it('renders correctly', () => {
  render(<LoadingComponent />);
  expect(screen.getByText('Loading...')).toBeTruthy();
});
