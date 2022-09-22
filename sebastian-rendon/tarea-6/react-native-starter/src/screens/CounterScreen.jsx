import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => { setCounter(counter + 1); }} />
      <Button title="Decrease" onPress={() => { setCounter(counter - 1); }} />
      <Text>
        Current count:
        {' '}
        {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
