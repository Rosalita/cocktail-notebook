import React from "react";
import { Button, StyleSheet, Text, View,  } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getRandomDrink } from "../API";


export default class RandomScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-wine"} size={25} color={tintColour} />
    )
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Can't decide what to make?</Text>
        <Button title="Random Drink" onPress={getRandomDrink}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center"
  }
});
