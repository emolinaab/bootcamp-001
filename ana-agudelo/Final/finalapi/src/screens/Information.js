import React from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../Colors";

export default function Information({navigation, route}){

    const { number, 
        namePokemon, 
        img, 
        height, 
        weight, 
        type,
        move,
        hp, 
        attack, 
        defense,
        specialAttack,
        specialDefense,
        speed,
        colorPokemon
      } = route.params;

    const Lines  = ({num: num,}) => {
        return(
            <View 
            style={{
                width: num,
                marginVertical: 7,
                height: 5,
                marginLeft: 10,
                borderRadius: 5,
                backgroundColor: Colors.lines,
            }}
            />
        )
    }
    return(
        <View style={{backgroundColor: colorPokemon, height: '100%'}}>
            <Image 
                source={require("../../assets/Pokeball.png")}
                style={style.pokeball}/>
            <Text style={style.id}>POKEMON: #{number}</Text>
            <Image 
                source={{uri:img}}
                style={style.pokemon}/>
            <Text style={style.name}>{namePokemon.toUpperCase()}</Text>
            <View style={style.infoSpace}>
                <Text style={style.information}>INFORMATION</Text>
                <View style={style.row}> 
                    <Text style={style.text}> Height: 
                        {height.toString().slice(0, height.toString().length -1)}
                        .
                        {height}
                        m
                    </Text>
                    <Text>{' '} —— </Text>
                    <Text style={style.text}>Type:{type}</Text>
                </View>
                <View style={style.row}> 
                    <Text style={style.text}>{' '}Weight:
                        {weight.toString().slice(0, weight.toString().length -1,)}
                        ,
                        {weight}
                        kg
                    </Text>
                    <Text>{' '} —— </Text>
                    <Text style={style.text}>{' '}Move:{move}</Text>
                </View>
                <Text style={style.information}>STATS</Text>
                <View style={[style.row, {justifyContent:'flex-start', padding:10}]}>
                    <View style= {{alignItems:'flex-end', marginRight: 10}}>
                        <Text>HP: </Text>
                        <Text>ATTACK: </Text>
                        <Text>DEFENSE: </Text>
                        <Text>SPECIAL-ATTACK: </Text>
                        <Text>SPECIAL-DEFENSE: </Text>
                        <Text>SPEED: </Text>
                    </View>

                    <View >
                        <Text>{hp}</Text>
                        <Text>{attack}</Text>
                        <Text>{defense}</Text>
                        <Text>{specialAttack}</Text>
                        <Text>{specialDefense}</Text>
                        <Text>{speed}</Text>
                    </View>
                    <View>
                        <Lines num = {hp}/>
                        <Lines num = {attack}/>
                        <Lines num = {defense} />
                        <Lines num = {specialAttack}/>
                        <Lines num = {specialDefense}/>
                        <Lines num = {speed}/>
                    </View>
                </View>
            </View> 
        </View>
    )
}

const style = StyleSheet.create({
    pokeball: {
        position: 'absolute',
        top: 50,
        right: 100,
    },
    pokemon: {
        width: 200,
        height:200,
        marginLeft: 90,

    },
    name: {
        fontSize: 30,
        color: Colors.black,
        textAlign:'center',
        fontFamily: 'monospace',
        fontWeight: 'bold',

    },
    id: {
        fontSize: 20,
        color: Colors.black,
        marginLeft: 12,
        textAlign:'left',
        fontFamily: 'monospace',
        height: 30,
        paddingTop: 9,

    },
    infoSpace: {
        position: 'absolute',
        bottom: 30,
        left: 7,
        borderRadius: 20,
        backgroundColor: Colors.white,
        width: '97%',
        height: '55%',

    },
    information: {
        fontSize: 20,
        color: Colors.black,
        textAlign:'center',
        paddingTop: 15,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:20,
    },
    text: {
        fontSize:15,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    }
});