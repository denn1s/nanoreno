import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Layout.scss'


class Layout extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root)
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root)
  }

  render() {
    return (
      <main ref={node => (this.root = node)} styleName="root">
        <article {...this.props} className={this.props.className} />
      </main>
    )
  }
}

export default CSSModules(Layout, styles)
