import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Constants from "expo-constants";

const mapStateToProps = state => {
  return { drinks: state.drinks };
};

class BarDetailScreen extends React.Component {
  componentDidMount() {
    console.log(this.props.navigation.state.params.id);
    console.log("***")
    console.log(this.props.drinks)

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <Text>{this.props.navigation.state.params.id}</Text>
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
