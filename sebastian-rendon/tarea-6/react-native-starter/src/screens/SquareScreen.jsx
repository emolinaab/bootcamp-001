import React, { useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 5;

function reducer(state, action) {
  switch (action.type) {
    case 'change_red':
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return state;
      }
      return {
        ...state,
        red: state.red + action.payload,
      };
    case 'change_green':
      if (state.gree + action.payload > 255 || state.green + action.payload < 0) {
        return state;
      }
      return {
        ...state,
        green: state.green + action.payload,
      };
    case 'change_blue':
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
        return state;
      }
      return {
        ...state,
        blue: state.blue + action.payload,
      };
    default:
      return state;
  }
}

function SquareScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green"
        onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
      />
      <View
        style={{
          ...styles.colorSquare,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>
        R:
        {' '}
        {red}
        {' '}
        G:
        {' '}
        {green}
        {' '}
        B:
        {' '}
        {blue}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  colorSquare: {
    height: 150,
    width: 150,
  },
});

export default SquareScreen;
