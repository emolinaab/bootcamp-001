import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../colors'

type Props = {
    currentPokemon: any;
}
const CardDetails = ({ currentPokemon }: Props) => {
    const StatLine = (props: {
        number: number | undefined;
        color: string | undefined;
    }) => {
        return (
            <View
                style={{
                    width: props.number,
                    marginVertical: 6,
                    height: 5,
                    marginLeft: 10,
                    borderRadius: 5,
                    backgroundColor: props.color,
                }}
            />
        );
    };
    return (
        <>

            <View
                style={[
                    styles.pokemonTypeContainer,
                    { alignSelf: 'center', backgroundColor: currentPokemon.color },
                ]}>
                <Text
                    style={{
                        color: Colors.white,
                        paddingHorizontal: 10,
                        fontWeight: 'bold',
                        fontSize: 16,
                        textAlign: 'center',
                    }}>
                    {currentPokemon.type}
                </Text>
            </View>
            {/* Pokemon About */}
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        color: currentPokemon.color,
                    }}>
                    About
                </Text>
                <View style={[styles.row, { justifyContent: 'center', marginTop: 20 }]}>
                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                        <Text>
                            ⚖️{' '}
                            {currentPokemon.weight
                                ?.toString()
                                .slice(0, currentPokemon.weight.toString().length - 1)}
                            .
                            {currentPokemon.weight
                                ?.toString()
                                .slice(
                                    currentPokemon.weight.toString().length - 1,
                                    currentPokemon.weight.toString().length,
                                )}{' '}
                            kg
                        </Text>
                        <Text
                            style={{ color: Colors.mediumGray, fontSize: 12, marginTop: 10 }}>
                            Weight
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                        <Text>
                            📏{' '}
                            {currentPokemon.height
                                ?.toString()
                                .slice(0, currentPokemon.height.toString().length - 1)}
                            .
                            {currentPokemon.height
                                ?.toString()
                                .slice(
                                    currentPokemon.height.toString().length - 1,
                                    currentPokemon.height.toString().length,
                                )}{' '}
                            m
                        </Text>
                        <Text
                            style={{ color: Colors.mediumGray, fontSize: 12, marginTop: 10 }}>
                            Height
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
                        <Text>{currentPokemon.move}</Text>
                        <Text
                            style={{ color: Colors.mediumGray, fontSize: 12, marginTop: 10 }}>
                            Move
                        </Text>
                    </View>
                </View>
            </View>
            {/* Pokemon Abilities */}
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,
                        color: currentPokemon.color,
                    }}>
                    Base Stats
                </Text>
                <View
                    style={[
                        styles.row,
                        {
                            justifyContent: 'flex-start',
                            marginHorizontal: 30,
                            marginTop: 20,
                        },
                    ]}>
                    <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                        <Text>HP</Text>
                        <Text>Attack</Text>
                        <Text>Defense</Text>
                        <Text>Special Attack</Text>
                        <Text>Special Defence</Text>
                        <Text>Speed</Text>
                    </View>
                    <View
                        style={{
                            height: 100,
                            width: 2,
                            backgroundColor: Colors.lightGray,
                            marginRight: 10,
                        }}
                    />
                    <View>
                        <Text>{currentPokemon.stats?.hp} </Text>
                        <Text>{currentPokemon.stats?.attack} </Text>
                        <Text>{currentPokemon.stats?.defense}</Text>
                        <Text>{currentPokemon.stats?.specialAttack}</Text>
                        <Text>{currentPokemon.stats?.specialDefense}</Text>
                        <Text>{currentPokemon.stats?.speed}</Text>
                    </View>
                    <View>
                        <StatLine
                            number={currentPokemon.stats?.hp}
                            color={currentPokemon.color}
                        />
                        <StatLine
                            number={currentPokemon.stats?.attack}
                            color={currentPokemon.color}
                        />
                        <StatLine
                            number={currentPokemon.stats?.defense}
                            color={currentPokemon.color}
                        />
                        <StatLine
                            number={currentPokemon.stats?.specialAttack}
                            color={currentPokemon.color}
                        />
                        <StatLine
                            number={currentPokemon.stats?.specialDefense}
                            color={currentPokemon.color}
                        />
                        <StatLine
                            number={currentPokemon.stats?.speed}
                            color={currentPokemon.color}
                        />
                    </View>
                </View>
            </View>
        </>
    );

};

export default CardDetails;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.fire,
    },
    pokeball: {
        position: 'absolute',
        right: 20,
        top: 50,
    },
    pokemonName: {
        fontSize: 35,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft: 20,
    },
    pokemonImage: {
        width: 200,
        height: 200,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pokemonTypeContainer: {
        height: 30,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteSheet: {
        position: 'absolute',
        bottom: 30,
        left: 10,
        borderRadius: 20,
        backgroundColor: Colors.white,
        width: '95%',
        height: '60%',
    },
});