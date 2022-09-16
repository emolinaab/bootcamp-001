import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

function ImageDetail({ title, image, score }) {
  return (
    <View style={styles.containerStyle}>
      <Image source={image} />
      <Text style={styles.headerStyle}>{title}</Text>
      <Text>{`${score} out of 10 score`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    display: 'flex',
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

ImageDetail.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default ImageDetail;
