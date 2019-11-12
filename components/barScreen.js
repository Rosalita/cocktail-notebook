import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class BarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'My Bar',
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-beer"} size={25} color={tintColour} />
    )
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Bar Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  }
});
