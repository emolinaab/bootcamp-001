import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Pagination = ({prev, next, onPrevious, onNext}) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <View style={styles.container}>
      {prev ? (
        <Button
          style={styles.buttons}
          color="#424242"
          title="Anterior"
          onPress={handlePrevious}
        />
      ) : null}
      {next ? (
        <Button
          style={styles.buttons}
          color="#424242"
          title="Siguiente"
          onPress={handleNext}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  buttons: {
    backgroundColor: '#2f4e6f',
  },
});

export default Pagination;
