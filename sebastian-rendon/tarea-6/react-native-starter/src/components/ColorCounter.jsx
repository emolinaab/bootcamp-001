import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={() => onIncrease()} />
      <Button title={`Less ${color}`} onPress={() => onDecrease()} />
    </View>
  );
}

const styles = StyleSheet.create({});

ColorCounter.propTypes = {
  color: PropTypes.string.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default ColorCounter;
