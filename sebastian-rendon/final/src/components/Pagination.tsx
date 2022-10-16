import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../theme/colors';

export type PaginationProps = {
  totalSize: number;
  pageSize: number;
  currentPage: number;
  onFirstPagePress: Function;
  onLastPagePress: Function;
  onPrevPagePress: Function;
  onNextPagePress: Function;
};

const Pagination = ({
  totalSize,
  pageSize,
  currentPage,
  onFirstPagePress,
  onLastPagePress,
  onNextPagePress,
  onPrevPagePress,
}: PaginationProps) => {
  const currentFirstItem = totalSize ? currentPage * pageSize + 1 : 0;
  const currentLastItem = Math.min(
    currentPage * pageSize + pageSize,
    totalSize,
  );

  const isPrevPageDisabled = currentPage <= 0;
  const isNextPageDisabled = currentPage >= Math.floor(totalSize / pageSize);

  return (
    <View style={styles.paginationWrapper}>
      <View style={styles.paginationButtons}>
        <TouchableOpacity
          testID="first-page-btn"
          style={styles.button}
          accessibilityLabel="First Page"
          disabled={isPrevPageDisabled}
          onPress={() => onFirstPagePress()}>
          <Icon
            name="page-first"
            style={{
              ...styles.buttonIcon,
              ...(isPrevPageDisabled ? styles.iconDisabled : {}),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="prev-page-btn"
          style={styles.button}
          disabled={isPrevPageDisabled}
          accessibilityLabel="Previous Page"
          onPress={() => onPrevPagePress()}>
          <Icon
            name="chevron-left"
            style={{
              ...styles.buttonIcon,
              ...(isPrevPageDisabled ? styles.iconDisabled : {}),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="next-page-btn"
          style={styles.button}
          disabled={isNextPageDisabled}
          accessibilityLabel="Next Page"
          onPress={() => onNextPagePress()}>
          <Icon
            name="chevron-right"
            style={{
              ...styles.buttonIcon,
              ...(isNextPageDisabled ? styles.iconDisabled : {}),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          testID="last-page-btn"
          style={styles.button}
          disabled={isNextPageDisabled}
          onPress={() => onLastPagePress()}>
          <Icon
            name="page-last"
            accessibilityLabel="Last Page"
            style={{
              ...styles.buttonIcon,
              ...(isNextPageDisabled ? styles.iconDisabled : {}),
            }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.paginationInfo}>
          {currentFirstItem} - {currentLastItem} / {totalSize}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: Colors.black,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 6,
    zIndex: 10,
  },
  paginationButtons: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginRight: 12,
  },
  buttonIcon: {
    fontSize: 24,
    color: Colors.white,
  },
  iconDisabled: {
    color: Colors.gray,
  },
  paginationInfo: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.white,
  },
});

export default Pagination;
