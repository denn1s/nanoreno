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
    const color = convert.hex.rgb(this.props.cut.emotion.color || '#FFFFFF')
    return `linear-gradient(to right, rgba(${color[0]},${color[1]},${color[2]},0) 0%,rgba(${color[0]},${color[1]},${color[2]},0.5) 25%,rgba(${color[0]},${color[1]},${color[2]},0.5) 75%,rgba(${color[0]},${color[1]},${color[2]},0) 100%)`
  }

  render() {
    const background = this.getBackground()
    const svg = require(`Assets/characters/${this.props.cut.id}/${this.props.cut.emotion.sprite}`)
    const spriteWidth = this.props.cut.emotion.width || '20vw'
    const spritePos = this.props.cut.emotion.pos || '20vh'

    return (
      <div styleName="skit" style={{ left: `${this.props.style.x}vw`, top: `${this.props.style.y}vh` }}>
        <div styleName="sprite" style={{ top: spritePos, marginLeft: `-${spriteWidth}` }}>
          <Svg svg={svg} width={spriteWidth} height="auto" />
        </div>
        <div styleName="trapezoid" style={{background: background}} />
      </div>
    )
  }
}
