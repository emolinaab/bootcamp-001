import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EmptyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No data to show</Text>
    </View>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
