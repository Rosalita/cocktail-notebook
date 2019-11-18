import { SAVE_DRINK } from "./actions";

const reducer = (prevState = { drinks: {} }, action) => {
  if (action.type === SAVE_DRINK) {
    return { drinks: {...prevState.drinks, ...action.payload}};
  }
  return prevState;
};

export default reducer;
