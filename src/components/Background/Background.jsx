import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FullscreenBackground from './FullscreenBackground'


@connect(
  state => ({ cuts: state.cuts, spotlight: state.spotlight })
)
export default class Background extends React.Component {
  render() {

    return (
      <FullscreenBackground filename="atCounter.png" />
    )
  }
}
