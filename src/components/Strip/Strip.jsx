import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite'
import Skit from './Skit'


@connect(
  state => ({ cuts: state.cuts })
)
export default class Strip extends React.Component {
  render() {
    return (
      <Infinite elementHeight={200} useWindowAsScrollContainer>
        { this.props.cuts.map((props, index) => <Skit key={index} skit={props.skit} />) }
      </Infinite>
    )
  }
}
