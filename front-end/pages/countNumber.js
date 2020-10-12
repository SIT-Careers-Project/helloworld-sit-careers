import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment } from '../store/countNumber/action'

const CountNumber = (props) => {
  const { value, OnDecrease, OnIncrease } = props
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={OnDecrease}>-</button>
      <button onClick={OnIncrease}>+</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  value: state.counter.counter
})

const mapDispatchToProps = (dispatch) => {
  return {
    OnDecrease: bindActionCreators(decrement, dispatch),
    OnIncrease: bindActionCreators(increment, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountNumber)