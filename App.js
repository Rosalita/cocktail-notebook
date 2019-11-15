import React from "react";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./redux/reducer";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
