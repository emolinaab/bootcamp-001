import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image, Button } from "react-native";





export const Charater = () => {

    const [characters, setCharacters] = useState([]);
    const [info, useInfo] = useState({})
    const [pages, usePages] = useState(1)
    const baseurl = "https://rickandmortyapi.com/api/character?page=" + pages
    const fetchCharacters = () => {
        fetch(baseurl)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                useInfo(data.info)
                pag = data.info

            })/* .then(alert(info.next)) */
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchCharacters();
    }, [pages])

    const next = () => {
        if (pages >= 42) {
            usePages(42)
        } else {
            count = pages + 1
            usePages(count)
        }
    }
    const prev = () => {

        if (pages <= 1) {
            usePages(1)
        } else {
            count = pages - 1
            usePages(count)
        }

    }

    /* const pagination = result.info */


    const renderCharacter = ({ item: { name, image, species, status, gender, location, info }, index }) => (
        <View style={styles.container}>
            <Image style={styles.imageCharacter} source={{ uri: image }} />
            <Text style={styles.nameCharacter}> {name}</Text>
            <View style={styles.containerInfo}>
                <Text style={styles.textInfo} >Specie: {species}</Text>
                <Text style={styles.textInfo}>Status: {status}</Text>
                <Text style={styles.textInfo}>Gender: {gender}</Text>
                <Text style={styles.textInfo}>Location: {location.name}</Text>
            </View>
        </View>
    )



    return (

        <View>
            <Text style={styles.nameCharacter}>page : {pages} of 42</Text>
            <View style={styles.containerBotton}>
                <Button
                    onPress={prev}
                    title="prev"
                    color="#0077b6"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={next}
                    title="next"
                    color="#0077b6"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
            <FlatList
                data={characters}
                renderItem={renderCharacter} keyExtractor={item => item.id}
            />

            {/*  <FlatList
                data={characters}
                renderItem={
                    ({ item }) => <View>

                        <Image style={styles.imageCharacter} source={{ uri: item.image }} />
                        <Text>Name: {item.name}</Text>
                        <Text>{item.status}</Text>
                        <Text>Especie: {item.species}</Text>
                        <Text>Especie: {item.image}</Text>
                        <Text>location: {item.location.name}</Text>

                    </View>


                }
            />  */}
            <View style={styles.containerBotton}>
                <Button
                    onPress={prev}
                    title="prev"
                    color="#0077b6"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={next}
                    title="next"
                    color="#0077b6"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'column',
            marginBottom: 20,
            /* alignItems: 'center',
            justifyContent: 'center' */
        },
        imageCharacter: {
            with: 130,
            height: 450,
        },
        nameCharacter: {
            fontSize: 30,
            textAlign: 'center',
            color: 'black'
        },
        containerInfo: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        textInfo: {
            fontSize: 20,
            color: '#22223b'
        },
        containerBotton: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 15,
            marginRight: 15,
        }


    }
);

/*  <FlatList
                data={result}
                renderItem={
                    ({ item }) => <View>
                        
                        <Image
                            
                            source={{
                                uri:'https://www.adobe.com/es/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium'
                            }}
                        />
                        <Text>Name: {item.name}</Text>
                        <Text>{item.status}</Text>
                        <Text>Especie: {item.species}</Text>
                        <Text>Especie: {item.image}</Text>
                        <Text>location: {item.location.name}</Text>

                    </View>


                }
            /> */