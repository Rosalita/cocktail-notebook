import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import searchListScreen from "./components/searchListScreen";
import searchDetailScreen from "./components/searchDetailScreen";
import barListScreen from "./components/barListScreen";
import barDetailScreen from "./components/barDetailScreen";
import randomScreen from "./components/randomScreen";

const SearchStackNavigator = createStackNavigator(
  {
    searchList: searchListScreen,
    searchDetails: searchDetailScreen
  },
  {
    headerMode: "none"
  }
);

const BarStackNavigator = createStackNavigator(
  {
    barList: barListScreen,
    barDetails: barDetailScreen
  },
  {
    headerMode: "none"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: () => ({
        tabBarLabel: "Search",
        tabBarIcon : () =>  <Ionicons name={"md-search"} size={25} />

      })
    },
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
