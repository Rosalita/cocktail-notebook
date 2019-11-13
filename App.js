import React from "react";
import TabNavigation from "./TabNavigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}
