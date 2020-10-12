import { countType } from './action'

const countInitialState = {
  counter: 0
}

export default function counterReducer(state = countInitialState, action) {
  switch (action.type) {
    case countType.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case countType.DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return { ...state }
  }
}
