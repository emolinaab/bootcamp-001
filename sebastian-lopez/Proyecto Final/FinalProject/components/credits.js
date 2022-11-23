import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Dimensions} from 'react-native'

import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const Credits = ({uri}) =>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const getMovies = async () => {
       try {
        const response = await fetch(uri)
        const data = await response.json()
        setData(data)

      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getMovies();
    }, []);

    return (
      isLoading ? <ActivityIndicator color={Colors.bg} size='large'/> : (
        <> 
          {data.cast.length? <Text style={styles.subtitles}>Cast</Text>:<></>}
          <FlatList
              style={styles.margin}
              showsHorizontalScrollIndicator={false}
              snapToInterval={width/2-24}
              horizontal={true}
              data={data.cast}
              keyExtractor={item => item.cast_id ? item.id + item.cast_id:item.id + item.credit_id }
              renderItem={({ item }) => (
              <View>
                  <Image source={{uri:item.profile_path? `https://image.tmdb.org/t/p/original${item.profile_path}`: "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"}} style={styles.imageStyle}/>
                  <View style={styles.info}>
                      <Text style={styles.personName}>{item.name}</Text>
                      <Text>{item.character}</Text>
                  </View>
              
              </View>
              )}
          />
          {data.crew.length?<Text style={styles.subtitles}>Crew</Text>:<></>}
          
          <FlatList
              style={styles.margin}
              showsHorizontalScrollIndicator={false}
              snapToInterval={width/2-24}
              horizontal={true}
              data={data.crew.reduce(function(o, cur) {
                let occurs = o.reduce(function(n, item, i) {
                  return (item.id === cur.id) ? i : n;
                }, -1);

                if (occurs >= 0) {
                  o[occurs].job = o[occurs].job.concat(cur.job);
                } else {
                  let obj = {
                    id:cur.id,
                    name: cur.name,
                    job: [cur.job],
                    profile_path:cur.profile_path
                  };
                  o = o.concat([obj]);
                }
              
                return o;
              }, [])}
              keyExtractor={item =>item.id}
              renderItem={({ item }) => ( 
                <View style={styles.crew}>
                    <Image source={{uri:item.profile_path? `https://image.tmdb.org/t/p/original${item.profile_path}`: "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"}} style={styles.imageStyle}/>
                    <Text style={styles.personName}>{item.name}</Text>
                    <Text>{item.job.join(', ')}</Text>
                </View>
              )}
          />

        </>
      )
    )
}


let { width} = Dimensions.get('window')
const styles = StyleSheet.create({
  imageStyle:{
    width:width/2-36,
    height:180,
    marginEnd:12,
  },
  info:{
    flex:1,
    marginTop:6,
    width:width/2-36,
    justifyContent:'flex-start'
  },
  personName:{
    fontWeight:'bold',
    color:Colors.darker
  },
  margin:{
    marginVertical:12
  },
  subtitles:{
    color:Colors.primary,
    fontWeight:'bold',
    fontSize:16
  },
  crew:{
    width:width/2-36,
    marginEnd:12
  }
});

export default Credits;
