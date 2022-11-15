import 'react-native';
import React from 'react';
import App from '../App';
import { renderWithProviders } from '../src/util/test-utils';

describe('when rendering app', () => {
  it('should render correctly', () => {
    const view = renderWithProviders(<App />);

    expect(view.container).toBeDefined();
  });
});
