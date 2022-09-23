import React, { useState } from 'react';
import {
  View, Button, StyleSheet, ScrollView, SafeAreaView,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function ColorScreen() {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button title="Add Color" onPress={() => { setColors([...colors, randomRgb()]); }} />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={{ ...styles.colorBoxStyle, backgroundColor: item }} />
        )}
      />
    </View>
  );
}

function randomRgb() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
  colorBoxStyle: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 100,
    minWidth: 100,
    height: 100,
    width: 100,
  },
});

export default ColorScreen;
