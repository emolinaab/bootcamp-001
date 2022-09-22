/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

function ImageScreen() {
  const images = [
    {
      title: 'Forest',
      image: require('../../assets/img/forest.jpg'),
      score: 7,
    },
    {
      title: 'Beach',
      image: require('../../assets/img/beach.jpg'),
      score: 9,
    },
    {
      title: 'Mountain',
      image: require('../../assets/img/mountain.jpg'),
      score: 4,
    },
  ];

  return (
    <View>
      {images.map((img) => (
        <ImageDetail key={img.title} title={img.title} image={img.image} score={img.score} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageScreen;
