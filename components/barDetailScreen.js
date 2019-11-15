import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import Constants from "expo-constants";

const mapStateToProps = state => {
  return { drinks: state.drinks };
};

class BarDetailScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: "My Bar",
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
        <Text>Bar Detail Screen</Text>
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
  },
  barItem: {
    height: 30,
    width: "100%",
    flexDirection: "row",
    marginTop: 10
  },
  barSelect: {
    height: 30,
    width: "100%",
    backgroundColor: "#DDDDDD",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(mapStateToProps)(BarDetailScreen);
