import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import searchScreen from "./components/searchScreen";
import barListScreen from "./components/barListScreen";
import barDetailScreen from "./components/barDetailScreen";
import randomScreen from "./components/randomScreen";

const BarStackNavigator = createStackNavigator(
  {
    barList: {
      screen: barListScreen,
      navigationOptions: () => ({
        tabBarLabel: "My Bar"
      })
    },
    barDetails: { screen: barDetailScreen }
  },
  {
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Search: searchScreen,
    Bar: {
      screen: BarStackNavigator,
      navigationOptions: () => ({
        tabBarLabel: "My Bar",
        tabBarIcon: () => <Ionicons name={"md-beer"} size={25} />
      })
    },
    Random: randomScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#0000FF"
    }
  }
);

export default createAppContainer(TabNavigator);
