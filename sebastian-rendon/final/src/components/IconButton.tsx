import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, PokemonTypeColors } from '../theme/colors';

type MainButtonProps = {
  icon: JSX.Element;
  variant?: string;
  onPress?: Function;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel?: string;
};

const IconButton = ({
  icon,
  onPress = () => {},
  variant = '',
  accessibilityLabel = '',
}: MainButtonProps) => {
  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      style={[
        styles.btn,
        {
          backgroundColor: variant
            ? PokemonTypeColors[variant]
            : Colors.pokemonRed,
        },
      ]}
      onPress={() => {
        onPress();
      }}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 192,
    height: 192,
    borderRadius: 9999,
    shadowColor: Colors.white,
    shadowOffset: {
      height: -2,
      width: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 4,
  },
});

export default IconButton;
