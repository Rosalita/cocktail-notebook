import { SAVE_DRINK } from "./actions";

const reducer = (prevState = { drinks: {} }, action) => {
  if (action.type === SAVE_DRINK) {
    const key = Object.keys(action.payload)[0];
    prevState.drinks[key] = action.payload;
    return { drinks: prevState.drinks };
  }
  return prevState;
};

export default reducer;
