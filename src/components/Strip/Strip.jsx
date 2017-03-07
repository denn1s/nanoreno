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

    this.spotlight0pos = { x: '-10vh', y: '-100vw' }
    this.spotlight1pos = { x: '0vh', y: '0vw' }
    this.spotlight2pos = { x: '1vh', y: '1vw' }
    this.spotlight3pos = { x: '2vh', y: '2vw' }
  }

  render() {
    console.log('cuts', this.props.cuts)
    console.log('spotlight', this.props.spotlight)
    const spotlight0 = this.props.cuts[this.props.spotlight[0]]
    const spotlight1 = this.props.cuts[this.props.spotlight[1]]
    const spotlight2 = this.props.cuts[this.props.spotlight[2]]
    const spotlight3 = this.props.cuts[this.props.spotlight[3]]

    return (
      <div styleName='strip'>
        { spotlight0 ?  <Skit skit={spotlight0.skit} x={this.spotlight0pos.x} y={this.spotlight0pos.y} /> : null }
        { spotlight1 ?  <Skit skit={spotlight1.skit} x={this.spotlight1pos.x} y={this.spotlight1pos.y} /> : null }
        { spotlight2 ?  <Skit skit={spotlight2.skit} x={this.spotlight2pos.x} y={this.spotlight2pos.y} /> : null }
        { spotlight3 ?  <Skit skit={spotlight3.skit} x={this.spotlight3pos.x} y={this.spotlight3pos.y} /> : null }
      </div>
    )
  }
}
