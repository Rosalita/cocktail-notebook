import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-search"} size={25} color={tintColour} />
    )
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#777777",
    alignItems: "center",
    justifyContent: "center"
  }
});
