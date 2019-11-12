import React from 'react';
import { Image, Text, View } from 'react-native';

const formatIngredients = (ingredients) => {
    let allIngredients = ""
    for (const [key, value] of Object.values(ingredients)) {
        allIngredients = allIngredients.concat("\n", key, " ", value)
    }
    return allIngredients
}

const Drink = props => (
    <View>
        <Text>Name: {props.name}</Text>
        <Text>Glass: {props.glass}</Text>
        <Text>Ingredients: {formatIngredients(Object.entries(props.ingredients))}</Text>
        <Text>Instructions: {props.instructions}</Text>
        <Image
          style={{width: 300, height: 300}}
          source={{uri: props.image}}
        />
    </View>
)

export default Drink