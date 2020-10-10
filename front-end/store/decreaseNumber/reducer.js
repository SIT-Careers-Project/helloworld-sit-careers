import { decrementType } from './action'

const countInitialState = {
  decreaseNumberValue: 100
}

export default function counterReducer(state = countInitialState, action) {
  switch (action.type) {
    case decrementType.DECREMENT:
      return { ...state, decreaseNumberValue: state.decreaseNumberValue - 1 }
    default:
      return { ...state }
  }
}