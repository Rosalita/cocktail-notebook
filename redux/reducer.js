import { SAVE_DRINK, DELETE_DRINK } from "./actions";

const reducer = (prevState = { drinks: {} }, action) => {
  if (action.type === SAVE_DRINK) {
    const key = action.payload.name;
    return { drinks: { ...prevState.drinks, [key]: action.payload } };
  }
  if (action.type === DELETE_DRINK) {
    const drinks = { ...prevState.drinks };
    delete drinks[action.payload];
    return { drinks };
  }
  return prevState;
};

export default reducer;
