import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import Drink from "./drink";

// const mapStateToProps = state => {
//   return { drinks: state.drinks };
// };

const mapDispatchToProps = dispatch => {
  return {
    saveDrink: drink => dispatch(saveDrink(drink))
  };
};

class SearchDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Drink
          name={this.props.navigation.state.params.drink.name}
          glass={this.props.navigation.state.params.drink.glass}
          image={this.props.navigation.state.params.drink.image}
          ingredients={this.props.navigation.state.params.drink.ingredients}
          instructions={this.props.navigation.state.params.drink.instructions}
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
  }
});

export default connect(null, mapDispatchToProps)(SearchDetailScreen);
