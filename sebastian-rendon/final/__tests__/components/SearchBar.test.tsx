import 'react-native';
import React from 'react';
import SearchBar, { SearchBarProps } from '../../src/components/SearchBar';
import { act, fireEvent, render } from '@testing-library/react-native';

describe('when using the SearchBar component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call onChangeText when the value changes', () => {
    const searchBarProps: SearchBarProps = {
      onChangeText: (text: string) => text,
      value: '',
      backgroundColor: undefined,
    };

    const mockValue = 'Pidgeotto';

    jest.spyOn(searchBarProps, 'onChangeText' as never);

    const view = render(<SearchBar {...searchBarProps} />);
    const textInput = view.getByPlaceholderText('Search');

    act(() => {
      fireEvent.changeText(textInput, mockValue);
    });

    expect(searchBarProps.onChangeText).toHaveBeenCalledTimes(1);
    expect(searchBarProps.onChangeText).toHaveBeenCalledWith(mockValue);
  });

  it('should have a background color if defined', () => {
    const searchBarProps: SearchBarProps = {
      onChangeText: (text: string) => text,
      value: '',
      backgroundColor: '#333333',
    };

    const view = render(<SearchBar {...searchBarProps} />);
    const container = view.getByTestId('searchbar-container');

    expect(container.props.style.backgroundColor).toEqual(
      searchBarProps.backgroundColor,
    );
  });
});
