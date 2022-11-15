import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Loading...</Text>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
