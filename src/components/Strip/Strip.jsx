import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Motion, spring, StaggeredMotion } from 'react-motion';
import CSSModules from 'react-css-modules'
import Skit from './Skit'
import styles from './Strip.scss'


const presets = {
  normal: {stiffness: 170, damping: 26},
  gentle: {stiffness: 120, damping: 14},
  wobbly: {stiffness: 180, damping: 12},
  stiff: {stiffness: 210, damping: 20},
  mad: {stiffness: 300, damping: 50},
}


@connect(
  state => ({ cuts: state.cuts, spotlight: state.spotlight, characters: state.characters })
)
@CSSModules(styles)
export default class Strip extends React.Component {
  constructor(props) {
    super(props)

    this.defaultSpotlightPos = {
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
    cut.key = this.props.spotlight[num]
    return cut
  }

  spotlightPos(i, direction, springness) {
    let newPos = null
    switch(i) {
      case 0:
        return {
          current: {
            x: this.defaultSpotlightPos[direction],
            y: -100
          },
          new: {  // 0 is bound to disapear
            x: null,
            y: null
          }
        }
      case 1:
        newPos = this.spotlightPos(0, direction).current // 1 is moving to 0's position
        return {
          current: {
            x: this.defaultSpotlightPos[direction],
            y: -50
          },
          new: {
            x: spring(newPos.x, springness),
            y: spring(newPos.y, springness)
          }
        }
      case 2:
        newPos = this.spotlightPos(1, direction).current // 2 is moving to 1's position
        return {
          current: {
            x: this.defaultSpotlightPos[direction],
            y: 10
          },
          new: {
            x: spring(newPos.x, springness),
            y: spring(newPos.y, springness)
          }
        }
      case 3:
        newPos = this.spotlightPos(2, direction).current
        return {
          current: {
            x: this.defaultSpotlightPos[direction] + (direction === 'right' ? 100 : -100),  // 3 is actually outside of the screen
            y: 10
          },
          new: {
            x: spring(newPos.x, springness),
            y: spring(newPos.y, springness)
          }
        }
    }
  }


  render() {
    const initialStiffness = 400
    const initialDamping = 60
    const finalStiffness = 400
    const finalDamping = 60

    console.log('cuts', this.props.cuts)
    console.log('spotlight', this.props.spotlight)
    const spotlight = [
      this.getCutFromSpotlight(0),
      this.getCutFromSpotlight(1),
      this.getCutFromSpotlight(2),
      this.getCutFromSpotlight(3)
    ]
    const springness = spotlight[3] ? presets[spotlight[3].emotion.motion] : null  // everyone moves as emotion 3 mandates
    console.log('s3 em', spotlight[3].emotion)
    console.log('springness', springness)
    const spotlightOrigin = []
    const spotlightTarget = []

    for (const si in spotlight) {
      const cut = spotlight[si]
      if (cut) {
        const spotlightPos = this.spotlightPos(parseInt(si, 10), cut.direction, springness)
        spotlightOrigin[si] = spotlightPos.current
        spotlightTarget[si] = spotlightPos.new
      } else {
        spotlightOrigin[si] = null
        spotlightTarget[si] = null
      }
    }

    return (
      <div styleName='strip'>
        {spotlight.map((si, index) => {
          if (!si || !spotlightTarget[index].x) {
            return null
          }
          return (
            <Motion key={si.key} defaultStyle={spotlightOrigin[index]} style={spotlightTarget[index]}>
              { style => <Skit key={si.key} cut={si} style={style} /> }
            </Motion>
          )
        })}
      </div>
    )
  }
}
