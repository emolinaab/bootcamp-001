import React from 'react'
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={ styles.activityContainer }>
        <ActivityIndicator size={ 50 } color='pink'/>
        <Text style={ styles.text }> Loading... </Text>

    </View>
  )
}
const styles = StyleSheet.create({
    activityContainer: {
      flex:1, 
      justifyContent:'center', 
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 6
    }
  });
  