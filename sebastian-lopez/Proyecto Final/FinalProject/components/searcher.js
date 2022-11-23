import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    ActivityIndicator,
    TextInput,
    Button,
    FlatList,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

const Searcher = ({navigation,type})=>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [newSearch,setNewSearch] = useState(false)
    const [query,setQuery] = useState('')

    const getMovies = async (uri) => {
       try {
        setLoading(true)
        const response = await fetch(uri)
        const data = await response.json()
        setData(data)
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  
    return (
        <>
            <View style={styles.browse}>
                <TextInput style={styles.input}  placeholderTextColor={Colors.dark} placeholder={'Search...'} onChange={e=>{
                    setQuery(e.nativeEvent.text)
                }}></TextInput>
                <Button
                title='&#x1F50D;'
                color={Colors.primary}
                onPress={()=>{
                  query.trim() != '' ? setNewSearch(true) : setNewSearch(false)
                  getMovies(`https://api.themoviedb.org/3/search/${type}?api_key=7682919b86439ef2230fe08030625c66&page=1&query=${query}`);
                }}
                ></Button>

            </View>
            {newSearch?(
              <View style={styles.set}>
                 <Text style={styles.secontTitle}>Results</Text>
                {isLoading?<ActivityIndicator color={Colors.primary} size={'large'}></ActivityIndicator>:
                data.results.length > 0?
                 <FlatList
                 showsHorizontalScrollIndicator={false}
                 snapToInterval={width/2-30+16}
                 horizontal={true}
                 data={data.results}
                 keyExtractor={item => item.id}
                 renderItem={({ item }) => (
                  (item.first_air_date || item.release_date) && item.vote_average && (item.poster_path || item.backdrop_path)?(
                 <TouchableOpacity style={styles.touchable} onPress={()=>{
                  item.release_date ? navigation.navigate('MovieDetails',{id:item.id}): navigation.navigate('TvShowDetails',{id:item.id})
                 }}>
                     <Image source={{uri: item.poster_path ==null ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.imageStyle}/>
                     <View style={styles.info}>
                       <View style={styles.rate}>
                           <Text style={styles.text}>{item.vote_average.toFixed(1).replace('.',"")}%</Text>
                           <Image style={styles.rateImage} source={{uri: "https://cdn-icons-png.flaticon.com/512/2107/2107854.png"}}/>
                       </View>
                       <Text style={styles.movieTitle}>{item.title ? item.title : item.name}</Text>
                       <Text style={styles.text}>{item.release_date ? item.release_date.substring(0,4):item.first_air_date.substring(0,4)}</Text>
                     </View>
                 
                 </TouchableOpacity>
                 ):<></>
                 )}
             />:<Text style={{color:Colors.light,marginLeft:8}}>No results...</Text>}
            </View>):<></>}
        </>
        
    )
}
      
let { height,width} = Dimensions.get('window')
const styles = StyleSheet.create({
  imageStyle:{
    width:width/2-30,
    height:245,
  },
  touchable:{
    width:width/2-30,
    marginHorizontal:8
  },
  secontTitle:{
    fontWeight:'bold',
    fontSize:30,
    marginBottom:10,
    marginLeft:8,
    color:Colors.lighter
  },
  info:{
    flex:1,
    padding:6,
    justifyContent:'flex-start',
    backgroundColor:Colors.info,
    color:Colors.white
  },
  rateImage:{
    width:17,
    height:17,
    marginLeft:5
  },
  rate:{
    flexDirection:'row'
  },
  set:{
    marginBottom:36,
    marginLeft:8
  },
  movieTitle:{
    fontWeight:'bold',
    color:Colors.darker 
  },
  text:{
    color:Colors.dark
  },
  browse:{
    flex:1,
    flexDirection:'row',
    marginVertical:12,
    marginHorizontal:16
  },
  input:{
    flex:1,
    height:40,
    width:width,
    borderColor:Colors.primary,
    borderLeftWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,
    paddingHorizontal:12 ,
    color:Colors.darker,
    backgroundColor:Colors.title
  }
  });
  
  export default Searcher;