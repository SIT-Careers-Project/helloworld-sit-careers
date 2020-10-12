export const decrementType = {
  DECREMENT: 'DECREMENT'
}

export const decrement = () => (dispatch) => {
  return dispatch({ type: decrementType.DECREMENT })
}