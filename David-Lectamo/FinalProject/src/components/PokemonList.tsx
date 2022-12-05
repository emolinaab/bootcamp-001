import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { PokemonClient } from 'pokenode-ts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setPokemon } from '../features/pokemonSlice';
import { increment, decrement, reset, incrementBy100, decrementBy100 } from '../features/CounterSlice';
import Pokemon, { Stats } from '../model/Pokemon';
import { Colors } from '../colors';

let bool = false;

const PokemonList = () => {
  const dispatch = useAppDispatch();
  const currentPokemon = useAppSelector(state => state.pokemon);
  const counter = useAppSelector(state => state.counter);

  useEffect(() => {
    const fetchPokemon = async () => {
      const api = new PokemonClient();
      await api
      .getPokemonById(counter.value)
      .then(pokemon => {
        const currentPokemonStats: Stats = {
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          specialAttack: pokemon.stats[3].base_stat,
          specialDefense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat
        };

        const newPokemon: Pokemon = {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon?.sprites?.front_default?.toString(),
          height: pokemon.height + '',
          weight: pokemon.weight + '',
          type: pokemon.types[0]?.type?.name?.toString(),
          move: pokemon?.moves[0]?.move?.name?.toString(),
          stats: currentPokemonStats,
          color: pokemon.types[0]?.type?.name?.toString() == 'grass'    ? Colors.grass    : 
                 pokemon.types[0]?.type?.name?.toString() == 'water'    ? Colors.water    :
                 pokemon.types[0]?.type?.name?.toString() == 'fire'     ? Colors.fire     : 
                 pokemon.types[0]?.type?.name?.toString() == 'electric' ? Colors.electric :
                 pokemon.types[0]?.type?.name?.toString() == 'psychic'  ? Colors.psychic  : 
                 pokemon.types[0]?.type?.name?.toString() == 'poison'   ? Colors.poison   :
                 pokemon.types[0]?.type?.name?.toString() == 'bug'      ? Colors.bug      : 
                 pokemon.types[0]?.type?.name?.toString() == 'flying'   ? Colors.flying   :
                 pokemon.types[0]?.type?.name?.toString() == 'fighting' ? Colors.fighting : 
                 pokemon.types[0]?.type?.name?.toString() == 'normal'   ? Colors.normal   :
                 pokemon.types[0]?.type?.name?.toString() == 'rock'     ? Colors.rock     : 
                 pokemon.types[0]?.type?.name?.toString() == 'ground'   ? Colors.ground   :
                 pokemon.types[0]?.type?.name?.toString() == 'ghost'    ? Colors.ghost    : 
                 pokemon.types[0]?.type?.name?.toString() == 'dark'     ? Colors.dark     :
                 pokemon.types[0]?.type?.name?.toString() == 'steel'    ? Colors.steel    : 
                 pokemon.types[0]?.type?.name?.toString() == 'fairy'    ? Colors.fairy    :
                 pokemon.types[0]?.type?.name?.toString() == 'dragon'   ? Colors.dragon   : 
                 pokemon.types[0]?.type?.name?.toString() == 'ice'      ? Colors.ice      :
                 Colors.black
        };

        dispatch(setPokemon(newPokemon));
      })
    }

    fetchPokemon();
  }, [counter, dispatch]);

  const handleNextButton = () => {
    dispatch(increment());
  }

  const handlePreviousButton = () => {
    dispatch(decrement());
  }

  const handleReset = () => {
    dispatch(reset());
  }

  const handle100PreviousButton = () => {
    dispatch(decrementBy100());
  }

  const handle100NextButton = () => {
    dispatch(incrementBy100());
  }

  const StatLine = (props: {
    number: number | undefined;
    color: string | undefined;
  }) => {
    let tmp = 0;
    if(props.number !== undefined)  {
      tmp = props.number
    }
    return(
      <View style = {[ styles.statsLine, { width: tmp, backgroundColor: props.color }]}/>
    )
  }

  if (currentPokemon.image !== undefined && currentPokemon.image !== null && currentPokemon.image !== '') {
    bool = true;
  }

  if (!bool) {
    return(
      <View style = {{ justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.ultraBlack, width: '100%', height: '100%' }}>
        <StatusBar hidden />
        <Image style = { styles.loading } source = {require('../images/loading.gif')}/>
      </View>
    );
  } else {
    return(
      <SafeAreaView style = { [styles.container, { backgroundColor: currentPokemon.color }] }>
        <StatusBar hidden />
        <View style = { styles.whiteSheet } />
        <Image style = { styles.imageTitle } source = {require('../images/title.png')}/>
        <Image style = { styles.pokeball } source = {require('../images/pokeball3Reverse.png')}/>
        <Image style = { styles.egg } source = {require('../images/egg.png')}/>
        <Image style = { styles.pokeball2 } source = {require('../images/pokeball3.png')}/>
        <Image style = { styles.pikachu } source = {require('../images/pikachu.gif')}/>
        <Image style = { styles.phone } source = {require('../images/phone.png')}/>
        <Image style = { styles.pokeBack } source = {require('../images/PokeballBackground.png')}/>
        
        {/**  Pokemon name and Id  */}
        <View style = { styles.header }>
          <Text style = { styles.pokemonName }>{ currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1) }</Text>
          <Text style = {[ styles.pokemonName, { textAlign: 'right', marginRight: 20, fontSize: 25 }]}>#{currentPokemon.id}</Text>
        </View>

        {/**  Pokemon Image  */}
        <View>
          <Image style = { styles.pokemonImage } source = {{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ currentPokemon.id }.png` }} resizeMode='cover' />
           {/** <Image style = { styles.pokemonImage } source = {{ uri: currentPokemon.image }} resizeMode='cover' />*/}
           {/** <Image style = { styles.pokemonImage } source = {require('../images/tmp.png')} resizeMode='cover' /> */}
        </View>
        
        {/**  Pokemon type and About  */}
        <View>
          <Text style = {{ textAlign: 'center', fontWeight: 'bold', fontSize: 26, marginTop: 20, color: currentPokemon.color }}>{currentPokemon.type.charAt(0).toUpperCase() + currentPokemon.type.slice(1)}</Text>

          {/**  Weight components  */}
          <View style = { styles.about }>
            <View style = {{ alignItems: 'center', marginHorizontal: 10 }}>
              <View style = { styles.about }>
                <Text style = {{ fontSize: 15, color: Colors.black }}>
                  {' '}
                  {currentPokemon.weight?.toString().slice(0, currentPokemon.weight.toString().length - 1)}
                  .
                  {currentPokemon.weight?.toString().slice(currentPokemon.weight.toString().length - 1, currentPokemon.weight.toString().length)}{' '}
                </Text>
                <Image style = { styles.kg } source = {require('../images/kg.png')}/>
              </View>
              <Text style = {{color: Colors.mediumGray, fontSize: 13, marginTop: 4}}>Weight</Text>
            </View>

            {/**  Height components  */}
            <View style = {{ alignItems: 'center', marginHorizontal: 10 }}>
              <View style = { styles.about }>
                <Text style = {{ fontSize: 15, color: Colors.black }}>
                  {' '}
                  {currentPokemon.height?.toString().slice(0, currentPokemon.height.toString().length - 1)}
                  .
                  {currentPokemon.height?.toString().slice(currentPokemon.height.toString().length - 1, currentPokemon.height.toString().length)}{' '}
                  m
                </Text>
              </View>
              <Text style = {{color: Colors.mediumGray, fontSize: 13, marginTop: 6}}>Height</Text>
            </View>

            {/**  Move components  */}
            <View style = {{ alignItems: 'center', marginHorizontal: 10 }}>
              <View style = { styles.about }>
                <Text style = {{ fontSize: 15, color: Colors.black }}>{currentPokemon.move}</Text>
              </View>
              <Text style = {{color: Colors.mediumGray, fontSize: 13, marginTop: 5}}>Move</Text>
            </View>
          </View>
        </View>
        
        {/**  Pokemon Stats  */}
        <View>
          <Text style = { styles.statsTitle }>Base Stats</Text>
          <View style = { styles.statsContainer }>
            {/**  Pokemon Stats name  */}
            <View style = {{alignItems: 'flex-end', marginRight: 10}}>
              <Text>HP</Text>
              <Text>Attack</Text>
              <Text>Defense</Text>
              <Text>Special Attack</Text>
              <Text>Special Defense</Text>
              <Text>Speed</Text>
            </View>

            <View style = {{height: 110, width: 2, backgroundColor: Colors.lightGray, marginRight: 10}}/>

            {/**  Pokemon Stats values  */}
            <View>
              <Text>{ currentPokemon.stats?.hp }</Text>
              <Text>{ currentPokemon.stats?.attack }</Text>
              <Text>{ currentPokemon.stats?.defense }</Text>
              <Text>{ currentPokemon.stats?.specialAttack }</Text>
              <Text>{ currentPokemon.stats?.specialDefense }</Text>
              <Text>{ currentPokemon.stats?.speed }</Text>
            </View>

            {/**  Pokemon Stats line  */}
            <View>
              <StatLine number = { currentPokemon.stats?.hp }             color = { currentPokemon.color }/>
              <StatLine number = { currentPokemon.stats?.attack }         color = { currentPokemon.color }/>
              <StatLine number = { currentPokemon.stats?.defense }        color = { currentPokemon.color }/>
              <StatLine number = { currentPokemon.stats?.specialAttack }  color = { currentPokemon.color }/>
              <StatLine number = { currentPokemon.stats?.specialDefense } color = { currentPokemon.color }/>
              <StatLine number = { currentPokemon.stats?.speed }          color = { currentPokemon.color }/>
            </View>
          </View>
        </View>

        {/**  Navegation Buttons  */}
        <View style = { styles.navegation }>
          <TouchableOpacity style = { styles.button } onPress = { handle100PreviousButton }>
          <Image style = { styles.arrow } source = {require('../images/leftDoubleArrow.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style = { styles.button } onPress = { handlePreviousButton }>
            <Image style = { styles.arrow } source = {require('../images/leftArrow.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style = { styles.button } onPress = { handleReset }>
          <Image style = { styles.arrow } source = {require('../images/middle.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style = { styles.button } onPress = { handleNextButton }>
            <Image style = { styles.arrow } source = {require('../images/rightArrow.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style = { styles.button } onPress = { handle100NextButton }>
            <Image style = { styles.arrow } source = {require('../images/rightDoubleArrow.png')}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default PokemonList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    weight: '100%',
    backgroundColor: Colors.unknown
  },

  imageTitle: {
    alignSelf: 'center',
    width: 140,
    height: 50,
    top: 7
  },

  title: {
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: '700',
    color: Colors.white,
  },

  pokemonName: {
    fontSize: 35,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20
  },

  pokemonImage: {
    alignSelf: 'center',
    width: 240,
    height: 240
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.white + '70',
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

  navegation: {
    flexDirection: 'row', 
    position: 'absolute',
    bottom: 12,
    right: 20
  },

  header: {
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent: 'space-between'
  },

  whiteSheet: {
    position: 'absolute',
    bottom: 90,
    left: 10,
    borderRadius: 15,
    backgroundColor: Colors.stats,
    width: '95%',
    height: '40%'
  },

  about: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop: 5
  },

  kg: {
    width: 23,
    height: 23,
    top: -3
  },

  rule: {
    width: 10,
    height: 23
  },

  statsTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    color: Colors.mediumGray
  },

  statsContainer: {
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent: 'flex-start',
    marginHorizontal: 30,
    marginTop: 10
  },

  statsLine: {
    marginVertical: 7,
    height: 5,
    marginLeft: 10,
    borderRadius: 5
  },

  loading: {
    alignSelf: 'center',
    width: 600,
    height: 600,
    top: -20
  },

  pokeball: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: 340,
    right: 70
  },

  pokeball2: {
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: 340,
    left: 70
  },

  egg: {
    position: 'absolute',
    width: 30,
    height: 40,
    left: 75,
    top: 12
  },

  pikachu: {
    position: 'absolute',
    width: 87,
    height: 95,
    right: 2,
    top: 1
  },

  phone: {
    position: 'absolute',
    width: 30,
    height: 40,
    left: 30,
    top: 12
  },

  pokeBack: {
    position: 'absolute',
    width: 250,
    height: 250,
    right: 70,
    top: 92,
  },

  arrow: {
    width: 40,
    height: 40
  },
});
