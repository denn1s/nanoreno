import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'


@connect(
  state => ({ cut: state.cut })
)
export default class Music extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nowPlaying: props.cut.music || null,
      initVolume: 0,
      finalVolume: 100
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cut.music && nextProps.cut.music !== this.state.nowPlaying) {
      this.setState({
        ...this.state,
        nowPlaying: nextProps.cut.music || null,
        initVolume: 100,
        finalVolume: 0
      })
    }
  }

  render() {
    const nowPlaying = this.state.nowPlaying ? require(`Assets/music/${this.state.nowPlaying}`) : null

    /*
    <Motion defaultStyle={{ volume: this.state.initVolume }} style={{ volume: spring(this.state.finalVolume) }}>
      { style =>  }
    </Motion>
    */

    return (
      <div>{ this.state.nowPlaying  && <embed loop="true" hidden="true" src={nowPlaying} type="audio/mpeg" /> }</div>
    )
  }
}
