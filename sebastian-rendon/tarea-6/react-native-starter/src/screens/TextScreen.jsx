import React, { useState } from 'react';
import {
  View, StyleSheet, TextInput, Text,
} from 'react-native';
import { $black } from '../theme/colors';

function TextScreen() {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.header}>Enter password</Text>
      <TextInput
        textContentType="password"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    margin: 15,
    borderColor: $black,
    borderWidth: 1,
    padding: 4,
  },
});

export default TextScreen;
