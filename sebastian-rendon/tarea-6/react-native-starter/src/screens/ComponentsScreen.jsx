import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function ComponentsScreen() {
  const helloName = 'My name is Sebastián Rendón';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.subheaderStyle}>{helloName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subheaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
