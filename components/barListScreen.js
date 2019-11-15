import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
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

  handleSelect = item => {
    console.log("selected");
    console.log(item);
    this.props.navigation.navigate("barDetails");
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text>My Bar</Text>
        <FlatList
          style={styles.list}
          data={this.getDrinkNames()}
          renderItem={({ item, index }) => (
            <View style={styles.barItem}>
              <TouchableOpacity
                style={styles.barSelect}
                onPress={() => this.handleSelect(item)}
              >
                <Text>
                  {index + 1}: {item}
                </Text>
              </TouchableOpacity>
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

export default connect(mapStateToProps)(BarScreen);
