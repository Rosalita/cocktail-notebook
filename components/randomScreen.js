import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { saveDrink } from "../redux/actions";
import Constants from "expo-constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getRandomDrink } from "../API";
import Drink from "./drink";

const mapDispatchToProps = dispatch => {
  return {
    saveDrink: drink => dispatch(saveDrink(drink))
  };
};

class RandomScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-wine"} size={25} color={tintColour} />
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      randomDrink: null,
      name: null,
      glass: null,
      image: null,
      ingredients: null,
      instructions: null
    };
  }

  handleRandomDrink = async () => {
    const drink = await getRandomDrink();
    console.log(drink);
    this.setState({
      randomDrink: drink,
      name: drink.name,
      glass: drink.glass,
      image: drink.image,
      ingredients: drink.ingredients,
      instructions: drink.instructions
    });
  };

  handleSave = () => {
    this.props.saveDrink(this.state.randomDrink);
  };

  render() {
    return (
      <View style={styles.screen}>
        {this.state.randomDrink && (
          <View style={styles.row}>
             <TouchableOpacity
                style={styles.customButton}
                onPress={this.handleRandomDrink}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Another Drink</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.customButton}
                onPress={this.handleSave}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Save To My Bar</Text>
              </TouchableOpacity>
          </View>
        )}

        {!this.state.randomDrink && (
          <View style={styles.centered}>
            <TouchableOpacity
              style={styles.randomSelect}
              onPress={this.handleRandomDrink}
            >
              <Text style={{ color: "white", fontSize: 24 }}>Random Drink</Text>
            </TouchableOpacity>
          </View>
        )}

        {this.state.randomDrink && (
          <Drink
            name={this.state.name}
            glass={this.state.glass}
            image={this.state.image}
            ingredients={this.state.ingredients}
            instructions={this.state.instructions}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    paddingTop: Constants.statusBarHeight,
    width: "100%"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  centered: {
    flex: 1,
    justifyContent: "center"
  },
  randomSelect: {
    height: 100,
    marginTop: 10,
    backgroundColor: "blue",
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  customButton: {
    height: 50,
    width: 150,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
});

export default connect(null, mapDispatchToProps)(RandomScreen);
