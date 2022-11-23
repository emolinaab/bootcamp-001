import React, { useEffect, useState } from 'react';
import { APIKEY, URL_BASE } from '../config/api';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    ActivityIndicator,
    Dimensions,
} from 'react-native';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

let { height,width} = Dimensions.get('window')

const SeasonEpisodes = ({route})=>{
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});


    const getData = async () => {
       try {
        const response = await fetch(`${URL_BASE}/tv/${route.params.id}/season/${route.params.season}?api_key=${APIKEY}`)
        const data = await response.json()
        setData(data)
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
        isLoading ?<ActivityIndicator size={'large'} color={Colors.primary}/> : (
            <View>
                <FlatList
                     ListHeaderComponent={
                        <>
                            <Image resizeMode='stretch' source={{uri:!data.poster_path ? `https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image`:`https://image.tmdb.org/t/p/original${data.poster_path}`}} style={styles.poster}/>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{data.name}</Text>
                            </View>
                        </>
                     }
                    showsHorizontalScrollIndicator={false}
                    data={data.episodes}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                    <View style={styles.episode}>
                        <Image source={{uri: item.still_path ==null ? `https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image`: `https://image.tmdb.org/t/p/w500${item.still_path}`}} style={styles.imageStyle}/>
                        <View style={styles.info}>
                            <Text style={[styles.text,styles.titleEpisode]}>{item.episode_number}: {item.name}</Text>
                            <Text style={styles.text}>{item.overview ? item.overview : 'No overview' }</Text>
                            {item.vote_average ? <Text style={[styles.text,{color:Colors.primary}]}>{item.vote_average.toFixed(1)}/10 rated</Text>:<></>}
                        </View>
                    
                    </View>
                    
                    )}
                /> 
            </View>
        )
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        backgroundColor:Colors.bg
    },
    title:{
        color:Colors.title,
        padding:10,
        textAlign:'center',
        fontSize:24,
        fontWeight:'900',
    },
    poster:{
        width:width,
        height:height/2,
        justifyContent:'flex-end',
    },
    episode:{
        margin:12
    },
    imageStyle:{
        width:width-24,
        height:200,
        resizeMode:'stretch',
    },
    info:{
        backgroundColor:Colors.light,
        padding:8
    },
    titleEpisode:{
        color:Colors.darker
    },
    text:{
        marginBottom:6
    }
})
export default SeasonEpisodes