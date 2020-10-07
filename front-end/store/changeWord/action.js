export const changWordType = {
  CHANGEWORD: 'CHANGEWORD'
}

export const changeWord = () => (dispatch) => {
  return dispatch({ type: changWordType.CHANGEWORD })
}
