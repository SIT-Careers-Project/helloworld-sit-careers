import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeWord } from '../store/changeWord/action'

const Hello = (props) => {
  const { word, changeWord } = props
  return (
    <div>
      <h1>{word}</h1>
      <button onClick={changeWord}>Change World</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  word: state.word.word
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeWord: bindActionCreators(changeWord, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)
