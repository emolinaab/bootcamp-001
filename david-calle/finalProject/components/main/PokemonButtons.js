import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {
  getNextPokemons,
  getPrevPokemons,
  getInitialPokemons,
} from '@redux/reducers/pokemon.reducer';
import {useDispatch} from 'react-redux';
import {COLORS} from '@constants';

const PokemonButtons = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        onPress={() => dispatch(getPrevPokemons())}
        style={styles.button}>
        <Icon name="angle-left" size={70} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(getInitialPokemons())}
        style={styles.button}>
        <Image
          source={require('@assets/images/pokeball.png')}
          style={styles.pokeball}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(getNextPokemons())}
        style={styles.button}>
        <Icon name="angle-right" size={70} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default PokemonButtons;

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.mainRed,
    flex: 1,
    maxHeight: 100,
    marginTop: 'auto',
  },
  button: {
    width: 30,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pokeball: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
});
