import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type SearchBarProps = {
  onChangeText: Function;
  value: string;
  backgroundColor?: string;
};

const SearchBar = ({
  value = '',
  onChangeText = () => {},
  backgroundColor,
}: SearchBarProps) => {
  return (
    <View
      testID="searchbar-container"
      style={{
        ...styles.searchWrapper,
        backgroundColor: backgroundColor || Colors.lightGray,
      }}>
      <Icon name="magnify" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor={Colors.white}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        returnKeyType="search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    position: 'relative',
    padding: 16,
    zIndex: 10,
  },
  searchIcon: {
    zIndex: 10,
    top: 28,
    left: 24,
    position: 'absolute',
    fontSize: 24,
    color: Colors.white,
  },
  searchInput: {
    color: Colors.white,
    position: 'relative',
    backgroundColor: Colors.darkGray,
    paddingLeft: 36,
    paddingRight: 16,
    fontSize: 16,
    height: 48,
    borderRadius: 9999,
  },
});

export default SearchBar;
