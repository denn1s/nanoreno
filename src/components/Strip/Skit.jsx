import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

@connect(
  state => ({ characters: state.characters })
)
export default class Skit extends React.Component {
  constructor(props) {
    super(props)

    const [ character, emotion ] = props.skit.split(' ')
    this.character = props.characters[character]
    this.emotion = this.character.emotions[emotion]
  }

  render() {
    return (
      <div>
        <h1>{this.character.name}</h1>
        <h2>{this.emotion.background}</h2>
      </div>
    )
  }
}
