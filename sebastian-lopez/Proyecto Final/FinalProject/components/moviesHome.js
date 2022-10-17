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

const Home = ({navigation}) => {

    return (        
      <ScrollView style={styles.principalView}>
        <View style={styles.menu}>
         <Pressable >
          <Text style={[styles.button,styles.current]}>Movies</Text>
         </Pressable>
         <Pressable onPress={()=>navigation.navigate('TvShows')}>
          <Text style={styles.button}>TV Shows</Text>
         </Pressable>
         
        </View>
  
        <Image style={styles.image} source={{uri:'https://www.seoclerk.com/pics/569323-1bpEHf1510684912.jpg'}}/>
       
        <Searcher navigation={navigation} type='movie'></Searcher>
        <Set uri={`${URL_BASE}/movie/popular?api_key=${APIKEY}`} title="Popular"></Set>
        <Set uri={`${URL_BASE}/trending/movie/day?api_key=${APIKEY}`} title="Trending today" ></Set>
        <Set uri={`${URL_BASE}/trending/movie/week?api_key=${APIKEY}`} title="Trending this week" ></Set>
        <Set uri={`${URL_BASE}/movie/now_playing?api_key=${APIKEY}`} title="Playing Now"></Set>
        <Set uri={`${URL_BASE}/movie/top_rated?api_key=${APIKEY}`} title="Top Rated" ></Set>
        <Set uri={`${URL_BASE}/movie/upcoming?api_key=${APIKEY}`} title="Upcoming" ></Set>
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
  
  export default Home;