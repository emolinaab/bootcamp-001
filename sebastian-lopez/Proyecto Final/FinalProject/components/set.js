import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Dimensions, TouchableOpacity} from 'react-native'
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const Set = ({uri,title}) =>{
    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [pag,setPag] = useState(1)
   
    const getData = async () => {
       try {
        const response = await fetch(`${uri}&page=${pag}`)
        const res = await response.json()
        setData([...data,...res.results])
        setPag(pag + 1)
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getData();
    }, []);

    return (
        <View style={styles.set}>
            <Text style={styles.secontTitle}>{title}</Text>
            {isLoading ?<ActivityIndicator size={'large'} color={Colors.primary}/> : (
            <FlatList
                showsHorizontalScrollIndicator={false}
                snapToInterval={width/2-30+16}
                horizontal={true}
                data={data}
                keyExtractor={item => item.id}
                onEndReached={()=>{
                  if(pag > 20){
                    return
                  }
                 getData()
                }}
                onEndReachedThreshold={3}
                renderItem={({ item }) => (
                  item.release_date  || item.first_air_date ?(
                <TouchableOpacity style={styles.touchable} onPress={()=>{            
                  !item.first_air_date?navigation.navigate('MovieDetails',{id:item.id}):navigation.navigate('TvShowDetails',{id:item.id})
                }}>
                    <Image source={{uri: item.poster_path ==null ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.imageStyle}/>
                    <View style={styles.info}>
                      <View style={styles.rate}>
                          <Text style={styles.text}>{item.vote_average.toFixed(1).replace('.',"")}%</Text>
                          <Image style={styles.rateImage} source={{uri: "https://cdn-icons-png.flaticon.com/512/2107/2107854.png"}}/>
                      </View>
                      <Text style={styles.movieTitle}>{item.title? item.title:item.name }</Text>
                      <Text style={styles.text}>{item.release_date? item.release_date.substring(0,4) : item.first_air_date.substring(0,4)}</Text>
                    </View>
                
                </TouchableOpacity>
                ):<></>
                )}
            />
            )}
      </View>
    )
}


let {width} = Dimensions.get('window')
const styles = StyleSheet.create({
  imageStyle:{
    width:width/2-30,
    height:245,
  },
  touchable:{
    width:width/2-30,
    marginHorizontal:8,
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
  } 
});

export default Set;
