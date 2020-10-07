import { changWordType } from './action'

const countInitialState = {
  word: 'Hello'
}

export default function reducer(state = countInitialState, action) {
  switch (action.type) {
    case changWordType.CHANGEWORD:
      return { ...state, word: 'World' }
    default:
      return state
  }
}
