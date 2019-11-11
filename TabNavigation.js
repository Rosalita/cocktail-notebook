import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import searchScreen from "./components/searchScreen";
import notesScreen from "./components/notesScreen";
import randomScreen from "./components/randomScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Search: searchScreen,
    Notes: notesScreen,
    Random: randomScreen
  },
  {
    tabBarOptions: {
      activeTintColor: "#0000FF"
    }
  }
);

export default createAppContainer(TabNavigator);
