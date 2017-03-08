import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import Skit from './Skit'
import styles from './Strip.scss'


@connect(
  state => ({ cuts: state.cuts, spotlight: state.spotlight })
)
@CSSModules(styles)
export default class Strip extends React.Component {
  constructor(props) {
    super(props)

    this.spotlightRightPos = '25vw'
    this.spotlightLeftPos = '-25vw'
    this.spotlightOutsideRightPos = '125vw'
    this.spotlightOutsideLeftPos = '-125vw'

    this.spotlight0pos = { y: '-100vh' }
    this.spotlight1pos = { y: '-50vh' }
    this.spotlight2pos = { y: '10vh' }
    this.spotlight3pos = { y: '10vh' }
  }

  render() {
    console.log('cuts', this.props.cuts)
    console.log('spotlight', this.props.spotlight)
    const spotlight0 = this.props.cuts[this.props.spotlight[0]]
    this.spotlight0pos.x = spotlight0 && spotlight0.direction === 'right' ? this.spotlightRightPos : this.spotlightLeftPos
    const spotlight1 = this.props.cuts[this.props.spotlight[1]]
    this.spotlight1pos.x = spotlight1 && spotlight1.direction === 'right' ? this.spotlightRightPos : this.spotlightLeftPos
    const spotlight2 = this.props.cuts[this.props.spotlight[2]]
    this.spotlight2pos.x = spotlight2 && spotlight2.direction === 'right' ? this.spotlightRightPos : this.spotlightLeftPos
    const spotlight3 = this.props.cuts[this.props.spotlight[3]]
    this.spotlight3pos.x = spotlight3 && spotlight3.direction === 'right' ? this.spotlightOutsideRightPos : this.spotlightOutsideLeftPos

    return (
      <div styleName='strip'>
        { spotlight0 ?  <Skit key="1" skit={spotlight0.skit} x={this.spotlight0pos.x} y={this.spotlight0pos.y} /> : null }
        { spotlight1 ?  <Skit key="2" skit={spotlight1.skit} x={this.spotlight1pos.x} y={this.spotlight1pos.y} /> : null }
        { spotlight2 ?  <Skit key="3" skit={spotlight2.skit} x={this.spotlight2pos.x} y={this.spotlight2pos.y} /> : null }
        { spotlight3 ?  <Skit key="4" skit={spotlight3.skit} x={this.spotlight3pos.x} y={this.spotlight3pos.y} /> : null }
      </div>
    )
  }
}
