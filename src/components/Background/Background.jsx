import React, { PropTypes } from 'react'
import FullscreenBackground from './FullscreenBackground'


export default class Background extends React.Component {
  render() {
    // TODO: choose background from state, pass props to background from state

    return (
      <FullscreenBackground kind="forest" number="1" />
    )
  }
}
