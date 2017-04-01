import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { rotate } from 'Actions'
import styles from './Layout.scss'


@connect(
 null,
 { rotate }
)
@CSSModules(styles)
export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.$handleNext = this.handleNext.bind(this)
  }

  handleNext() {
    this.props.rotate()
  }

  render() {
    return (
      <main ref={node => (this.root = node)} styleName="root" className={this.props.className} onClick={this.$handleNext} onKeyDown={this.$handleNext} {...this.props} />
    )
  }
}
