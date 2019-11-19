import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";
import { saveDrink } from "../redux/actions";
import Drink from "./drink";

const mapDispatchToProps = dispatch => {
  return {
    saveDrink: drink => dispatch(saveDrink(drink))
  };
};

class SearchDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSave = () => {
    this.props.saveDrink({
      name: this.props.navigation.state.params.drink.name,
      glass: this.props.navigation.state.params.drink.glass,
      image : this.props.navigation.state.params.drink.image,
      ingredients : this.props.navigation.state.params.drink.ingredients, 
      instructions: this.props.navigation.state.params.drink.instructions,
    });
  };

  render() {
    return (
      <View style={styles.screen}>
         <TouchableOpacity
              style={styles.customButton}
              onPress={this.handleSave}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Save To My Bar
              </Text>
            </TouchableOpacity>

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
  },
  customButton: {
    height: 50,
    width: 150,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
});

export default connect(null, mapDispatchToProps)(SearchDetailScreen);
