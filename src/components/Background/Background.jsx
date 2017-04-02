import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import FullscreenBackground from './FullscreenBackground'


@connect(
  state => ({ cut: state.cut })
)
export default class Background extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nowPlaying: props.cut.background
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cut.background && nextProps.cut.background !== this.state.nowPlaying) {
      this.setState({
        ...this.state,
        nowPlaying: nextProps.cut.background || null
      })
    }
  }

  render() {
    return (
      <FullscreenBackground filename={this.state.nowPlaying} />
    )
  }
}
