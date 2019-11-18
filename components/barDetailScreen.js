import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import Drink from "./drink";

const mapStateToProps = state => {
  return { drinks: state.drinks };
};

class BarDetailScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Drink
            name={this.props.drinks[this.props.navigation.state.params.id].name}
            glass={this.props.drinks[this.props.navigation.state.params.id].glass}
            image={this.props.drinks[this.props.navigation.state.params.id].image}
            ingredients={this.props.drinks[this.props.navigation.state.params.id].ingredients}
            instructions={this.props.drinks[this.props.navigation.state.params.id].instructions}
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
    paddingTop: Constants.statusBarHeight,
    width: "100%"
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
