import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
    ImageBackground,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity
} from 'react-native';
  
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import Credits from './credits';

let { height,width} = Dimensions.get('window')

import { APIKEY, URL_BASE } from '../config/api';

const MovieInfo = ({route}) => {
    const scrollRef = useRef()
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [similar,setSimilar] = useState([])
    const [id,setId] = useState(route.params.id)
    const [collection,setCollection] = useState({})
    const getData = async (id) => {
       try {
        setLoading(true)
        const response = await fetch(`${URL_BASE}/movie/${id}?api_key=${APIKEY}`)
        const response2 = await fetch(`${URL_BASE}/movie/${id}/similar?api_key=${APIKEY}`)
        const data1 = await response.json()
        const similarData = await response2.json()
      
        if(data1.belongs_to_collection){
            const response3 = await fetch(`${URL_BASE}/collection/${data1.belongs_to_collection.id}?api_key=${APIKEY}`)
            const coll = await response3.json()
            setCollection(coll)
        }
        setData(data1)
        setSimilar(similarData)
        
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getData(id);
    }, []);
    
    function InfoPiece({subtitle,info}){
        return (
            info?(
            <>
                <Text style={styles.subtitles}>{subtitle}</Text>
                <Text style={styles.textInfo}>{info}</Text>
            </>):<></>
        )
    }
    function MovieRelatedList({list}){
        return (
            list?
            <FlatList
                style={styles.set}
                showsHorizontalScrollIndicator={false}
                snapToInterval={width/2-30+16}
                horizontal={true}
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                item.release_date?(
                <TouchableOpacity style={styles.touchable} onPress={()=>{
                    if(item.id != id){
                        setId(item.id)
                        getData(item.id)
                        scrollRef.current?.scrollTo({
                            y:0,
                            animated:false
                        })
                    }else{
                        scrollRef.current?.scrollTo({
                            y:0,
                            animated:true
                        })
                    }           
                }}>
                    <Image source={{uri: item.poster_path ==null ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.imageSimilar}/>
                    <View style={styles.info2}>
                    <View style={styles.rate}>
                        <Text style={styles.text}>{item.vote_average.toFixed(1).replace('.',"")}%</Text>
                        <Image style={styles.rateImage} source={{uri: "https://cdn-icons-png.flaticon.com/512/2107/2107854.png"}}/>
                    </View>
                    <Text style={styles.movieTitle}>{ item.title}</Text>
                    <Text style={styles.text}>{item.release_date.substring(0,4)}</Text>
                    </View>
                
                </TouchableOpacity>
                ):<></>
                )}
            />:<></>
        )
    }
    return (
        <ScrollView ref={scrollRef}>
            {isLoading ?<ActivityIndicator size={'large'} /> : (
                <View style={styles.all}>
                    
                    <ImageBackground resizeMode='cover' source={{uri:data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`:`https://image.tmdb.org/t/p/original${data.poster_path}`}} style={styles.poster}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{data.original_title}</Text>
                        </View>
                       
                    </ImageBackground>
                    <View style={styles.info}>
                        {data.tagline? <Text style={styles.tagline}>{data.tagline}</Text>: <></>}
                        <InfoPiece subtitle={'Genres'} info={data.genres.map(genre =>genre.name ).join(' - ')}/>
                        <InfoPiece subtitle={'Overview'} info={data.overview}/>
                        <InfoPiece subtitle={'Release Date'} info={data.release_date}/>
                        <InfoPiece subtitle={'Vote Average'} info={`${data.vote_average.toFixed(1)}/10`}/>
                        {data.runtime?<InfoPiece subtitle={'Runtime'} info={`${Math.trunc(data.runtime / 60)}h ${data.runtime % 60}m`}/>:<></>}
                        {data.budget? <InfoPiece subtitle={'Budget'} info={`$${Intl.NumberFormat('en-US').format(data.budget)}`}/>:<></>}
                        
                        {data.revenue?<InfoPiece subtitle={'Revenue'} info={`$${Intl.NumberFormat('en-US').format(data.revenue)}`}/>:<></>}
                         <Credits uri={`${URL_BASE}/movie/${id}/credits?api_key=${APIKEY}&language=en-US`}></Credits>
                         {data.production_companies.length >0?(
                            <>
                                {data.production_companies.some(company => company.logo_path) ? <Text style={styles.subtitles}>Production Companie(s)</Text>:<></>}
                                <FlatList
                                horizontal={true}
                                data={data.production_companies}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    item.logo_path?
                                    <Image source={{uri:`https://image.tmdb.org/t/p/original${item.logo_path}`}} style={styles.imageStyle}/>
                                    :<></>                      
                                )}
                                />
                             </>
                        ):<></>}
                    </View>
                    {!collection || collection == {}?<></>:
                        <>
                            <Text style={[styles.subtitles,{marginHorizontal:16,marginBottom:16}]}>{collection.name}</Text>
                            <MovieRelatedList list={collection.parts}></MovieRelatedList>
                        </>
                    }
                    <Text style={[styles.subtitles,{marginHorizontal:16,marginBottom:16}]}>Similar to this movie</Text>
                    <MovieRelatedList list={similar.results}></MovieRelatedList>
                </View>
            )}
       
        </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    all:{
        backgroundColor:Colors.light
    },
    poster:{
        width:width,
        height:height/2.5,
        justifyContent:'flex-end',
    },
    titleContainer:{
        backgroundColor:'rgba(94, 0, 16,0.7)'
    },
    title:{
        color:Colors.title,
        padding:10,
        textAlign:'center',
        fontSize:24,
        fontWeight:'900',
    },
    info:{
        paddingHorizontal:20,
        paddingTop:20,
        backgroundColor:Colors.light
    },
    tagline:{
        fontStyle:'italic',
        textAlign:'center',
        color:Colors.darker,
        fontWeight:'500',
        marginBottom:15,
        fontSize:18
    },
    textInfo:{
        marginBottom:12,
        fontSize:16
    },
    imageStyle:{
        width:width/3-24,
        marginRight:10,
        marginVertical:16,
        height:60,
        resizeMode:'contain',
    },
    subtitles:{
        color:Colors.primary,
        fontWeight:'bold',
        fontSize:20
    },
    imageSimilar:{
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
      info2:{
        flex:1,
        padding:6,
        justifyContent:'space-around',
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
  
  export default MovieInfo;