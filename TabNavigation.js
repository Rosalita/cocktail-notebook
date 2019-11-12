import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import searchScreen from "./components/searchScreen";
import barScreen from "./components/barScreen";
import randomScreen from "./components/randomScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Search: searchScreen,
    Bar: barScreen,
    Random: randomScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#0000FF"
    }
  }
);

export default createAppContainer(TabNavigator);
