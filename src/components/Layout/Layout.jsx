import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './Layout.scss'


@CSSModules(styles)
export default class Layout extends React.Component {
  render() {
    return (
      <main ref={node => (this.root = node)} styleName="root" className={this.props.className} {...this.props} />
    )
  }
}
