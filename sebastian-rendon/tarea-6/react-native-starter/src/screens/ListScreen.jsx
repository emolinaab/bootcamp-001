import React from 'react';
import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';

function ListScreen() {
  const friends = [
    { name: 'Santiago', age: 22 },
    { name: 'Julian', age: 23 },
    { name: 'Nando', age: 22 },
    { name: 'Sofia', age: 21 },
    { name: 'Valentina', age: 23 },
    { name: 'Simon', age: 22 },
    { name: 'Daniela', age: 24 },
  ];

  return (
    <FlatList
      keyExtractor={(item) => item.name}
      data={friends}
      renderItem={({ item }) => (
        <>
          <Text key={item.key} style={styles.textStyle}>
            {item.name}
          </Text>
          <Text key={item.key}>
            {item.age}
            {' years old.'}
          </Text>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginTop: 50,
  },
});

export default ListScreen;
