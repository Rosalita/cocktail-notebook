import { SAVE_DRINK } from "./actions";

const reducer = (prevState = { drinks: {} }, action) => {
  if (action.type === SAVE_DRINK) {
    const key = Object.keys(action.payload)[0];
    return { drinks: {...prevState.drinks, [key]: action.payload}};
  }
  return prevState;
};

export default reducer;
