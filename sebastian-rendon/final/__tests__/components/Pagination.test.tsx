import 'react-native';
import React from 'react';
import Pagination, { PaginationProps } from '../../src/components/Pagination';
import { act, fireEvent, render } from '@testing-library/react-native';

describe('when using the Pagination component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should disable first and previous button if currentPage is 0', () => {
    const paginationProps: PaginationProps = {
      totalSize: 33,
      pageSize: 10,
      currentPage: 0,
      onFirstPagePress: () => {},
      onLastPagePress: () => {},
      onPrevPagePress: () => {},
      onNextPagePress: () => {},
    };

    spyOn(paginationProps, 'onFirstPagePress');
    spyOn(paginationProps, 'onPrevPagePress');

    const view = render(<Pagination {...paginationProps} />);
    const firstPageBtn = view.getByTestId('first-page-btn');
    const prevPageBtn = view.getByTestId('prev-page-btn');

    act(() => {
      fireEvent.press(firstPageBtn);
      fireEvent.press(prevPageBtn);
    });

    expect(paginationProps.onFirstPagePress).not.toHaveBeenCalled();
    expect(paginationProps.onPrevPagePress).not.toHaveBeenCalled();
  });

  it('should allow first and prev button if currentPage is not first', () => {
    const paginationProps: PaginationProps = {
      totalSize: 33,
      pageSize: 10,
      currentPage: 1,
      onFirstPagePress: () => {},
      onLastPagePress: () => {},
      onPrevPagePress: () => {},
      onNextPagePress: () => {},
    };

    spyOn(paginationProps, 'onFirstPagePress');
    spyOn(paginationProps, 'onPrevPagePress');

    const view = render(<Pagination {...paginationProps} />);
    const firstPageBtn = view.getByTestId('first-page-btn');
    const prevPageBtn = view.getByTestId('prev-page-btn');

    act(() => {
      fireEvent.press(firstPageBtn);
      fireEvent.press(prevPageBtn);
    });

    expect(paginationProps.onFirstPagePress).toHaveBeenCalledTimes(1);
    expect(paginationProps.onPrevPagePress).toHaveBeenCalledTimes(1);
  });

  it('should disable last and next button if currentPage is last', () => {
    const paginationProps: PaginationProps = {
      totalSize: 33,
      pageSize: 10,
      currentPage: 4,
      onFirstPagePress: () => {},
      onLastPagePress: () => {},
      onPrevPagePress: () => {},
      onNextPagePress: () => {},
    };

    spyOn(paginationProps, 'onNextPagePress');
    spyOn(paginationProps, 'onLastPagePress');

    const view = render(<Pagination {...paginationProps} />);
    const lastPageBtn = view.getByTestId('last-page-btn');
    const nextPageBtn = view.getByTestId('next-page-btn');

    act(() => {
      fireEvent.press(lastPageBtn);
      fireEvent.press(nextPageBtn);
    });

    expect(paginationProps.onLastPagePress).not.toHaveBeenCalled();
    expect(paginationProps.onNextPagePress).not.toHaveBeenCalled();
  });

  it('should allow last and next button if currentPage is not last', () => {
    const paginationProps: PaginationProps = {
      totalSize: 33,
      pageSize: 10,
      currentPage: 1,
      onFirstPagePress: () => {},
      onLastPagePress: () => {},
      onPrevPagePress: () => {},
      onNextPagePress: () => {},
    };

    spyOn(paginationProps, 'onNextPagePress');
    spyOn(paginationProps, 'onLastPagePress');

    const view = render(<Pagination {...paginationProps} />);
    const lastPageBtn = view.getByTestId('last-page-btn');
    const nextPageBtn = view.getByTestId('next-page-btn');

    act(() => {
      fireEvent.press(lastPageBtn);
      fireEvent.press(nextPageBtn);
    });

    expect(paginationProps.onLastPagePress).toHaveBeenCalledTimes(1);
    expect(paginationProps.onNextPagePress).toHaveBeenCalledTimes(1);
  });
});
