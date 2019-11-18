// action types
export const SAVE_DRINK = 'SAVE_DRINK'
export const DELETE_DRINK = 'DELETE_DRINK'

// action creators
export const saveDrink = drink => ({
  type: SAVE_DRINK,
  payload: drink,
})

export const deleteDrink = drink => ({
  type: DELETE_DRINK,
  payload: drink,
})
