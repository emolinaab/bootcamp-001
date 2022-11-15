import React, { useEffect } from 'react';
import { StyleSheet, StatusBar, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import TypesService from '../../services/TypesServices';
import {
  selectIsLoadingTypes,
  selectSearch,
  selectTypesList,
  setCurrentTypeName,
  setPaginationOptions,
  setSearch,
} from '../../store/TypesSlice';
import { Colors } from '../../theme/colors';
import PokemonTypeCard from '../../components/pokemon/PokemonTypeCard';
import { RootStackParamList } from '../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const typesServices = new TypesService();

const TypesPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const typesList = useAppSelector(selectTypesList);
  const isLoadingTypes = useAppSelector(selectIsLoadingTypes);

  useEffect(() => {
    dispatch(typesServices.fetchTypesList());
  }, []);

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={Colors.pokemonRed} />
      <SearchBar
        backgroundColor={Colors.pokemonRed}
        value={search}
        onChangeText={(text: string) => {
          dispatch(setSearch(text));
        }}
      />
      {isLoadingTypes ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color={Colors.white} />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.typesList}
          numColumns={2}
          data={typesList}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PokemonTypeCard
              type={item.name}
              onPress={() => {
                dispatch(setPaginationOptions({ offset: 0 }));
                dispatch(setCurrentTypeName(item.name));
                navigation.navigate('TypeDetail');
              }}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  typesList: {
    paddingBottom: 20,
  },
  main: {
    backgroundColor: Colors.darkGray,
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  loadingWrapper: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TypesPage;
