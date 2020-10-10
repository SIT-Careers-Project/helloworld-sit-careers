import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement } from '../store/decreaseNumber/action'

const Decrease = (props) => {
  const { value, decrease } = props
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  value: state.decreaseNumberValue.decreaseNumberValue
})

const mapDispatchToProps = (dispatch) => {
  return {
    decrease: bindActionCreators(decrement, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Decrease)