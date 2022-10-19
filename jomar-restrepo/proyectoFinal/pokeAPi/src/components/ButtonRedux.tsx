/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useAppDispatch } from '../app/hooks';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';


const ButtonRedux = () => {

    const dispatch = useAppDispatch();

return (
    <>
    <TouchableOpacity
    onPress={() => dispatch(increment())}
        style={{
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 5,
            margin: 10,
        }}
    >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Increment</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => dispatch(decrement())}
        style={{
            backgroundColor: '#29938d',
            padding: 10,
            borderRadius: 5,
            margin: 10,
        }}
    >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Decrement</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => dispatch(incrementByAmount(10))}
        style={{
            backgroundColor: '#5f32b8',
            padding: 10,
            borderRadius: 5,
            margin: 10,
        }}
    >
        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Add 10</Text>
    </TouchableOpacity>
    </>

  );

};

export default ButtonRedux;
