import React, { useEffect } from 'react';
import { View, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useDebouncedValue } from './../hooks/useDebouncedValue';

interface Props {
  onDebounce: ( value: string ) => void;
  style?: StyleProp<ViewStyle>
}

export const SearchInput = ( { style, onDebounce }: Props ) => {

  const [ input, setInput ] = useState('');

  const debouncedValue = useDebouncedValue( input );

  useEffect(() => {

    onDebounce( debouncedValue );

  }, [ debouncedValue ])
  

  return (
    <View style={{ ...styles.container, ...style as any }}>
        <View style={ styles.textBackground }>
            <TextInput placeholder='Search Pokémon'
              style={ styles.input }
              autoCapitalize="none"
              autoCorrect={ false }
              value={ input }
              onChangeText={ setInput }
            />

            <Icon
              name='search-outline'
              color="grey"
              size={ 30 }
            />

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor: 'red'
    },
    textBackground: {
      backgroundColor: '#F3F2F5',
      borderRadius: 50,
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
      color: 'black'
    },
    input: {
      flex: 1,
      fontSize: 18,
      top: 1,
      color: '#000'
    }
});