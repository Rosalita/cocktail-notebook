import React from "react";
import { Button, FlatList, Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import Constants from "expo-constants";

const mapStateToProps = state => {
  return { drinks: state.drinks };
};

class BarScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "My Bar",
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-beer"} size={25} color={tintColour} />
    )
  };

  constructor(props) {
    super(props);
  }

  getDrinkNames = () => {
    return Object.keys(this.props.drinks);
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text>My Bar</Text>
        <FlatList
          style={styles.list}
          data={this.getDrinkNames()}
          renderItem={({ item, index }) => (
            <View>
              <Text>
                {index + 1}: {item}
              </Text>
            </View>
          )}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  },
  list: {
    marginTop: 10
  }
});

export default connect(mapStateToProps)(BarScreen);
