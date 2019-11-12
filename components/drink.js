import React from 'react';
import {Image, Text, View } from 'react-native';

const Drink = props => (
    <View>
        <Text>Name: {props.name}</Text>
        <Text>Glass: {props.glass}</Text>
        <Text>Image: {props.image}</Text>
        <Text>Ingredients: {Object.entries(props.ingredients)}</Text>
        <Text>Instructions: {props.instructions}</Text>
    </View>
)

export default Drink