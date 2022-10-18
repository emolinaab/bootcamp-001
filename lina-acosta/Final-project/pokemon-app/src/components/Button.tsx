import React from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import { useAppDispatch } from "../app/hooks";
import { increment, decrement } from '../features/counter/counterSlice';
const Button = () => {
    const dispatch = useAppDispatch();
    return (
        <>
        <TouchableOpacity
            onPress={() => dispatch(increment())}
        >
            <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => dispatch(decrement())}
        >
            <Text>Decrement</Text>
        </TouchableOpacity>
        </>
    );
}

export default Button;