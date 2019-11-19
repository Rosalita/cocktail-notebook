import React from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";
import { searchDrink } from "../API";

const Row = props => (
  <TouchableOpacity
    onPress={() =>
      props.selected({
        name: props.name,
        glass: props.glass,
        image: props.image,
        ingredients: props.ingredients,
        instructions: props.instructions
      })
    }
  >
    <View style={styles.row}>
      <Text style={styles.listText}>{props.name}</Text>
    </View>
  </TouchableOpacity>
);
const renderItem = selected => obj => <Row selected={selected} {...obj.item} />;

export default class SearchListScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-search"} size={25} color={tintColour} />
    )
  };

  constructor(props) {
    super(props);

    this.state = {
      searchString: "",
      drinks: []
    };
  }

  getDrinks = async searchString => {
    const drinks = await searchDrink(searchString);
    console.log(drinks);

    if (drinks !== undefined) {
      this.setState({ drinks });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchString !== prevState.searchString) {
      this.getDrinks(this.state.searchString);
    }
  }

  updateSearch = searchString => {
    this.setState({
      searchString: searchString
    });
  };

  drinkSelected = drink => {
    console.log("drink selected");
    console.log(drink);
    return this.props.navigation.navigate("searchDetails", { drink });
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.titleText}>Find a drink</Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchString}
          onChangeText={this.updateSearch}
        />
        <FlatList
          data={this.state.drinks}
          renderItem={renderItem(this.drinkSelected)}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3
  },
  titleText: {
    fontSize: 24
  },
  listText: {
    color: "blue"
  },
  row: {
    padding: 10
  }
});
