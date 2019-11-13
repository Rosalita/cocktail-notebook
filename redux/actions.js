// action types
export const SAVE_DRINK = 'SAVE_DRINK'

// action creators
export const saveDrink = drink => ({
  type: SAVE_DRINK,
  payload: drink,
})
