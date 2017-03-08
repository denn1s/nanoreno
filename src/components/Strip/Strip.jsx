import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Motion, spring, presets } from 'react-motion';
import CSSModules from 'react-css-modules'
import Skit from './Skit'
import styles from './Strip.scss'


@connect(
  state => ({ cuts: state.cuts, spotlight: state.spotlight, characters: state.characters })
)
@CSSModules(styles)
export default class Strip extends React.Component {
  constructor(props) {
    super(props)

    this.spotlightPos = {
      'right': 25,
      'left': -25
    }
  }

  getCutFromSpotlight(num) {
    const cut = this.props.cuts[this.props.spotlight[num]]

    if (!cut) {
      return null
    }

    const [ character, emotion ] = cut.skit.split(' ')
    cut.id = character
    cut.character = this.props.characters[character]
    if (!cut.character) {
      console.error(character, 'is not defined!')
      throw 'Error'
    }
    cut.emotion = cut.character.emotions[emotion]
    if (!cut.emotion) {
      console.error(character, 'cannot feel', emotion)
      throw 'Error'
    }
    return cut
  }

  spotlight0pos(direction) {
    return {
      current: {
        x: this.spotlightPos[direction],
        y: -100
      },
      new: {  // 0 is bound to disapear
        x: null,
        y: null
      }
    }
  }

  spotlight1pos(direction, springness) {
    const newPos = this.spotlight0pos(direction).current // 1 is moving to 0's position
    return {
      current: {
        x: this.spotlightPos[direction],
        y: -50
      },
      new: {
        x: spring(newPos.x, springness),
        y: spring(newPos.y, springness)
      }
    }
  }

  spotlight2pos(direction, springness) {
    const newPos = this.spotlight1pos(direction).current // 2 is moving to 1's position
    return {
      current: {
        x: this.spotlightPos[direction],
        y: 10
      },
      new: {
        x: spring(newPos.x, springness),
        y: spring(newPos.y, springness)
      }
    }
  }

  spotlight3pos(direction, springness) {
    const newPos = this.spotlight2pos(direction).current
    return {
      current: {
        x: this.spotlightPos[direction] + (direction === 'right' ? 100 : -100),  // 3 is actually outside of the screen
        y: 10
      },
      new: {
        x: spring(newPos.x, springness),
        y: spring(newPos.y, springness)
      }
    }
  }  


  render() {
    console.log('cuts', this.props.cuts)
    console.log('spotlight', this.props.spotlight)
    const spotlight0 = this.getCutFromSpotlight(0)
    const spotlight1 = this.getCutFromSpotlight(1)
    const spotlight2 = this.getCutFromSpotlight(2)
    const spotlight3 = this.getCutFromSpotlight(3)
    const springness = spotlight3 ? presets[spotlight3.emotion.motion] : null  // everyone moves as emotion 3 mandates
    let spotlight0motion = null
    let spotlight1motion = null
    let spotlight2motion = null
    let spotlight3motion = null

    if (spotlight0) {
      const spotlight0pos = this.spotlight0pos(spotlight0.direction)
      spotlight0motion = (
        <Motion defaultStyle={spotlight0pos.current} style={spotlight0pos.new}>
          { style => <Skit cut={spotlight0} style={style} /> }
        </Motion>
      )
    }
    if (spotlight1) {
      const spotlight1pos = this.spotlight1pos(spotlight1.direction, springness)
      spotlight1motion = (
        <Motion defaultStyle={spotlight1pos.current} style={spotlight1pos.new}>
          { style => <Skit cut={spotlight1} style={style} /> }
        </Motion>
      )
    }
    if (spotlight2) {
      const spotlight2pos = this.spotlight2pos(spotlight2.direction, springness)
      spotlight2motion = (
        <Motion defaultStyle={spotlight2pos.current} style={spotlight2pos.new}>
          { style => <Skit cut={spotlight2} style={style} /> }
        </Motion>
      )
    }
    if (spotlight3) {
      const spotlight3pos = this.spotlight3pos(spotlight3.direction, springness)
      spotlight3motion = (
        <Motion defaultStyle={spotlight3pos.current} style={spotlight3pos.new}>
          { style => <Skit cut={spotlight3} style={style} /> }
        </Motion>
      )
    }

    return (
      <div styleName='strip'>
        { spotlight0motion }
        { spotlight1motion }
        { spotlight2motion }
        { spotlight3motion }
      </div>
    )
  }
}
