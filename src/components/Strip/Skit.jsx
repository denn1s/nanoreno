import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import convert from 'color-convert'
import Svg from 'react-svg-inline'
import CSSModules from 'react-css-modules'
import styles from './Strip.scss'


@connect(
  state => ({ characters: state.characters })
)
@CSSModules(styles)
export default class Skit extends React.Component {
  getBackground() {
    const [ character, emotion ] = this.props.skit.split(' ')
    this.id = character
    this.character = this.props.characters[character]
    if (!this.character) {
      console.error(character, 'is not defined!')
    }
    this.emotion = this.character.emotions[emotion]
    if (!this.emotion) {
      console.error(character, 'cannot feel', emotion)
    }
    console.log('1. skit', this.props.skit)
    const color = convert.hex.rgb(this.emotion.color || '#FFFFFF')
    return `linear-gradient(to right, rgba(${color[0]},${color[1]},${color[2]},0) 0%,rgba(${color[0]},${color[1]},${color[2]},0.5) 25%,rgba(${color[0]},${color[1]},${color[2]},0.5) 75%,rgba(${color[0]},${color[1]},${color[2]},0) 100%)`
  }

  render() {
    const background = this.getBackground()
    const svg = require(`Assets/characters/${this.id}/${this.emotion.sprite}`)
    console.log('2. skit', this.props.skit)
    const spriteWidth = this.emotion.width || '20vw'
    const spritePos = this.emotion.pos || '20vh'

    return (
      <div styleName="skit" style={{ left: this.props.x, top: this.props.y }}>
        <div styleName="sprite" style={{ top: spritePos, marginLeft: `-${spriteWidth}` }}>
          <Svg svg={svg} width={spriteWidth} height="auto" />
        </div>
        <div styleName="trapezoid" style={{background: background}} />
      </div>
    )
  }
}
