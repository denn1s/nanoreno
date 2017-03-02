import React, { PropTypes } from 'react'
import cx from 'classnames'
// import TextBox from '../TextBox'

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
      <main ref={node => (this.root = node)}>
        <div {...this.props} className={this.props.className} />
      </main>
    )
  }
}

export default Layout
