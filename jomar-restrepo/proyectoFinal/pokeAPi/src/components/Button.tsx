import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../colors';

type Props = {
  onPress: () => any,
  children: string,
}
const Button = ({ children, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>

  );
};

export default Button;

const styles = StyleSheet.create({

  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.white + '70',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.black,
  },
});


