import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Textbox.scss'


class NormalTextbox extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { name, text } = this.props

    return (
      <section styleName="normal-textbox">
        <h1 styleName="name">{name}</h1>
        <div styleName="text">{text}</div>
      </section>
    )
  }
}

export default CSSModules(NormalTextbox, styles)
