import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './Strip.scss'


@connect(
  state => ({ characters: state.characters })
)
@CSSModules(styles)
export default class Skit extends React.Component {
  constructor(props) {
    super(props)

    const [ character, emotion ] = props.skit.split(' ')
    this.character = props.characters[character]
    if (!this.character) {
      console.error(character, 'is not defined!')
    }
    this.emotion = this.character.emotions[emotion]
    if (!this.emotion) {
      console.error(character, 'cannot feel', emotion)
    }
  }

  render() {
    return (
      <div>
        <h1>{this.character.name}</h1>
        <h2>{this.emotion.background}</h2>
        <div styleName="trapezoid" />
      </div>
    )
  }
}
