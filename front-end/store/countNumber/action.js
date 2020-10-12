export const countType = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT'
}

export const decrement = () => (dispatch) => {
  return dispatch({ type: countType.DECREMENT })
}

export const increment = () => (dispatch) => {
  return dispatch({ type: countType.INCREMENT })
}
