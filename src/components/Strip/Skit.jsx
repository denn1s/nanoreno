import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import convert from 'color-convert'
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
    const color = convert.hex.rgb(this.emotion.color || '#FFFFFF')
    this.background = `linear-gradient(to right, rgba(${color[0]},${color[1]},${color[2]},0) 0%,rgba(${color[0]},${color[1]},${color[2]},0.5) 25%,rgba(${color[0]},${color[1]},${color[2]},0.5) 75%,rgba(${color[0]},${color[1]},${color[2]},0) 100%)`
  }

  render() {
    return (
      <div styleName="skit">
        <div styleName="trapezoid" style={{background: this.background}} />
      </div>
    )
  }
}
