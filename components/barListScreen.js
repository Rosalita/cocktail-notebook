import React from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";

const mapStateToProps = state => {
  return { drinks: state.drinks };
};

class BarScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  getDrinkNames = () => {
    return Object.keys(this.props.drinks);
  };

  handleSelect = item => {
    return this.props.navigation.navigate("barDetails", { id: item });
  };

  handleDelete = item => {
    console.log("delete")
    console.log(item)
  }

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
                style={styles.barView}
                onPress={() => this.handleSelect(item)}
              >
                <Text style={{ color: "white", fontSize: 16 }}>View</Text>
              </TouchableOpacity>
              <Text>
                {index + 1}: {item}
              </Text>
              <TouchableOpacity
                style={styles.barDelete}
                onPress={() => this.handleDelete(item)}
              >
                <Text style={{ color: "white", fontSize: 16 }}>Delete</Text>
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
    marginTop: 10,
    width: "100%",
  },
  barItem: {
    height: 30,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center"
  },
  barView: {
    height: 30,
    width: 100,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  barDelete: {
    height: 30,
    width: 100,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
   
  }
});

export default connect(mapStateToProps)(BarScreen);
