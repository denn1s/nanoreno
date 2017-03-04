import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Layout.scss'


class Layout extends React.Component {
  render() {
    return (
      <main ref={node => (this.root = node)} styleName="root" className={this.props.className} {...this.props} />
    )
  }
}

export default CSSModules(Layout, styles)
