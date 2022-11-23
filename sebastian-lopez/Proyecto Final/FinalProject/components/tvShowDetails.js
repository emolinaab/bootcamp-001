import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
    TouchableOpacity,
    Modal,
    Pressable,
    Linking
} from 'react-native';
  
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import { URL_BASE,APIKEY } from '../config/api';
import Credits from './credits';

let { height,width} = Dimensions.get('window')



const TvShowInfo = ({route}) => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [seasonOverview,setSeasonOverview] = useState('')
    const [seasonEpisodes,setEpisodes] = useState('0')
    const [seasonNumber,setSeasonNumber] = useState(0)
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});


    const getData = async () => {
       try {
        const response = await fetch(`${URL_BASE}/tv/${route.params.id}?api_key=${APIKEY}`)
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
    
    function InfoPiece({subtitle,info}){
        return (
            info?(
            <>
                <Text style={styles.subtitles}>{subtitle}</Text>
                <Text style={styles.textInfo}>{info}</Text>
            </>):<></>
        )
    }
    function Companies({subtitle,data}){
        return (
            data.length >0?(
            <>
                {data.some(company => company.logo_path) ? <Text style={styles.subtitles}>{subtitle}</Text>:<></>}
                <FlatList
                horizontal={true}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    item.logo_path?
                    <Image source={{uri:`https://image.tmdb.org/t/p/original${item.logo_path}`}} style={styles.imageStyle}/>
                    :<></>                      
                )}
                />
             </>
        ):<></>)
    }
    return (
        <ScrollView>
            {isLoading ?<ActivityIndicator size={'large'} /> : (
                <View style={styles.all}>
                    
                    <ImageBackground resizeMode='cover' source={{uri:data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`:`https://image.tmdb.org/t/p/original${data.poster_path}`}} style={styles.poster}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{data.original_name}</Text>
                        </View>
                       
                    </ImageBackground>
                    <View style={styles.info}>
                        {data.tagline? <Text style={styles.tagline}>{data.tagline}</Text>: <></>}
                        <InfoPiece subtitle={'Genres'} info={data.genres.map(genre =>genre.name ).join(' - ')}/>
                        <InfoPiece subtitle={'Overview'} info={data.overview}/>
                        <InfoPiece subtitle={'First Air Date'} info={data.first_air_date}/>
                        <InfoPiece subtitle={'Last Air Date'} info={data.last_air_date}/>
                        <InfoPiece subtitle={'Vote Average'} info={`${data.vote_average.toFixed(1)}/10`}/>
                        <InfoPiece subtitle={'Episodes'} info={data.number_of_episodes}/>
                        <Text style={styles.subtitles}>Seasons</Text>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                              setModalVisible(!modalVisible);
                            }}                        
                        >
                             <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <InfoPiece subtitle={'Episodes'} info={`${seasonEpisodes}`}/>
                                    <InfoPiece subtitle={'Overview'} info={seasonOverview}/>
                                    <Pressable
                                        style={styles.close}
                                        onPress={() => setModalVisible(!modalVisible)}
                                        >
                                        <Text style={{fontSize:25}}>&#10006;</Text>
                                    </Pressable>
                                    <Pressable
                                        onPress={() =>{
                                            setModalVisible(!modalVisible)
                                            navigation.navigate('Episodes',{id:data.id,season:seasonNumber})
                                        }}
                                        >
                                        <Text style={styles.seasonInfo}>See episodes</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={width/2-38+16}
                            horizontal={true}
                            data={data.seasons}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                item.episode_count ? <TouchableOpacity style={styles.touchable} onPress={()=>{    
                                    setEpisodes(item.episode_count)
                                    setSeasonOverview(item.overview)
                                    setSeasonNumber(item.season_number)
                                    setModalVisible(true)
                                }}>
                                    <Image source={{uri: item.poster_path ==null ? `https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image`: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.imageSeason}/>
                                    <View style={styles.seasonContent}>
                                        <Text style={styles.seasonTitle}>{item.name }</Text>
                                        <Text style={{color:Colors.light}}>{item.air_date ?item.air_date.substring(0,4): '-'}</Text>
                                    </View>
                                    
                                   
                                </TouchableOpacity>:<></>
                            )}
                        />
                        <InfoPiece subtitle={'Status'} info={data.status}/>
                        <TouchableOpacity onPress={()=>Linking.openURL(data.homepage)}>
                            <InfoPiece subtitle={'Homepage'} info={data.homepage}/>
                        </TouchableOpacity>
                      

                        <Companies data={data.networks} subtitle='Available on '></Companies>
                        <Credits uri={`${URL_BASE}/tv/${data.id}/credits?api_key=${APIKEY}`}></Credits>
                        {data.created_by.length? <Text style={styles.subtitles}>Created By</Text>:<></>}
                        {data.created_by.length? 
                        <FlatList
                            style={styles.margin}
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={width/2-24}
                            horizontal={true}
                            data={data.created_by}
                            keyExtractor={item =>  item.id }
                            renderItem={({ item }) => (
                            <View style={styles.creators}>
                                <Image source={{uri:item.profile_path? `https://image.tmdb.org/t/p/original${item.profile_path}`: "https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image"}} style={styles.creator}/>
                                <Text>{item.name}</Text>
                            </View>
                            )}
                        />:<></>}
                        <Companies data={data.production_companies} subtitle='Production Companies'></Companies>
                       
                    </View>
                   
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
        padding:20,
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
        marginVertical:10,
        height:60,
        resizeMode:'contain',
    },
    subtitles:{
        color:Colors.primary,
        fontWeight:'bold',
        fontSize:16
    },
    creators:{
        width:width/2-36,
        marginEnd:12
    },
    creator:{
        width:width/2-36,
        height:180,
    },
    margin:{
        marginVertical:12
    },
    imageSeason:{
        width:width/2-30,
        height:245,
    },
    touchable:{
        width:width/2-30,
        marginVertical:12,
        marginEnd:8
    },
    seasonTitle:{
        fontWeight:'bold',
        color:Colors.lighter,
    },
    seasonContent:{
        padding:8,
        backgroundColor:Colors.bg
    },
    seasonInfo:{
        padding:8,
        textAlign:'center',
        backgroundColor:Colors.bg,
        color:Colors.title
    },
    centeredView: {
        flex: 1,
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        padding: 24,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position:'relative'
    },
    close:{
        position:'absolute',
        top:10,
        right:20,
    }
});
  
  export default TvShowInfo;