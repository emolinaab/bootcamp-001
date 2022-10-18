import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, PokemonTypeColors } from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTypeIcon } from '../../hooks/icons';

export type PokemonTypeCardProps = {
  type: string;
  onPress?: Function;
};

const PokemonTypeCard = ({
  type,
  onPress = () => {},
}: PokemonTypeCardProps) => {
  const icon = useTypeIcon(type);

  return (
    <TouchableOpacity
      testID="pokemon-type-card"
      style={styles.cardWrapper}
      onPress={() => {
        onPress();
      }}>
      <View
        testID="pokemon-type-card-view"
        style={{
          ...styles.typeCard,
          backgroundColor: PokemonTypeColors[type] || Colors.pokemonRed,
        }}>
        <Text testID="pokemon-type-card-text" style={styles.typeText}>
          {type}
        </Text>
        {icon ? (
          <Icon
            testID="pokemon-type-card-icon"
            accessibilityLabel={icon}
            name={icon}
            style={styles.typeIcon}
            size={76}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: '50%',
    padding: 8,
  },
  typeCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 9999,
    minHeight: 50,
    padding: 16,
    shadowColor: Colors.white,
    shadowOffset: {
      height: -4,
      width: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 4,
    overflow: 'hidden',
  },
  typeText: {
    color: Colors.white,
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  typeIcon: {
    position: 'absolute',
    right: -5,
    bottom: -15,
    color: Colors.white,
    opacity: 0.75,
  },
});

export default PokemonTypeCard;
