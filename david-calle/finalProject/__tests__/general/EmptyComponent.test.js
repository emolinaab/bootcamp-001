/**
 * @format
 */
import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import EmptyComponent from '~components/general/EmptyComponent';

it('renders correctly', () => {
  render(<EmptyComponent />);
  expect(screen.getByText('No data to show')).toBeTruthy();
});
