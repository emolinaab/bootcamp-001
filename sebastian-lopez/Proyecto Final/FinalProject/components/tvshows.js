import Set from './set';
import {
    ScrollView,
    StyleSheet,
    Text,
    Dimensions,
    View,
    Pressable,
    Image
  } from 'react-native';
  
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

import Searcher from './searcher';
import { APIKEY, URL_BASE } from '../config/api';

const TvShows = ({navigation}) => {

    return (        
      <ScrollView style={styles.principalView}>
        <View style={styles.menu}>
         <Pressable onPress={()=>navigation.navigate('Home')}>
          <Text style={styles.button}>Movies</Text>
         </Pressable>
         <Pressable>
          <Text style={[styles.button,styles.current]}>TV Shows</Text>
         </Pressable>
         
        </View>

        <Image style={styles.image} source={{uri:'https://www.top5s.net/wp-content/uploads/tv-series-featured-img.png'}}/>
     
        <Searcher navigation={navigation} type='tv'/>
        <Set uri={`${URL_BASE}/tv/popular?api_key=${APIKEY}`} title="Popular"></Set>
        <Set uri={`${URL_BASE}/trending/tv/day?api_key=${APIKEY}`} title="Trending today" ></Set>
        <Set uri={`${URL_BASE}/trending/tv/week?api_key=${APIKEY}`} title="Trending this week" ></Set>
        <Set uri={`${URL_BASE}/tv/top_rated?api_key=${APIKEY}`} title="Top Rated"></Set>
        <Set uri={`${URL_BASE}/tv/on_the_air?api_key=${APIKEY}`} title="On the air"></Set>
        <Set uri={`${URL_BASE}/tv/airing_today?api_key=${APIKEY}`} title="Airing today"></Set>
      </ScrollView>  
);
};

const styles = StyleSheet.create({
    principalView:{ 
      flex: 1, 
      backgroundColor:Colors.bg
    },
    image:{
    width:Dimensions.get('window').width,
    height:120,
    resizeMode:'stretch'
    },
    menu:{
      flexDirection:'row'
    },
    button:{
      width:Dimensions.get('window').width/2,
      padding:12,
      textAlign:'center',
      backgroundColor:Colors.primary,
      color:Colors.title,
      fontWeight:'500',
      fontSize:20
    },
    current:{
      backgroundColor:Colors.menu
    }
  });
  
  export default TvShows;