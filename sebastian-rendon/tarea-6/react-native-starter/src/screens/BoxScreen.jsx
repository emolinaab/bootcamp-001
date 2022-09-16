import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  $black, $purple, $red, $white,
} from '../theme/colors';

function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: $black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: $red,
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: $purple,
    alignSelf: 'flex-end',
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: $white,
  },
});

export default BoxScreen;
