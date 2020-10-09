import { decrementType } from './action'

const countInitialState = {
  value: 100
}

export default function counterReducer(state = countInitialState, action) {
  switch (action.type) {
    case decrementType.DECREMENT:
      return { ...state, value: state.value - 1 }
    default:
      return { ...state }
  }
}