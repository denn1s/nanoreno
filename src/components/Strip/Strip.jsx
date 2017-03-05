import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite'
import Skit from './Skit'
import styles from './Strip.scss'


@connect(
  state => ({ cuts: state.cuts })
)
export default class Strip extends React.Component {
  render() {
    return (
      <Infinite className={styles.strip} elementHeight={200} useWindowAsScrollContainer>
        { this.props.cuts.map((props, index) => <Skit key={index} skit={props.skit} />) }
      </Infinite>
    )
  }
}
