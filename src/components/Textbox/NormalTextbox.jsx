import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Textbox.scss'


@CSSModules(styles)
export default class NormalTextbox extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onNext: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.$handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.onNext()
  }

  render() {
    const { name, text } = this.props

    return (
      <section styleName="normal-textbox">
        <h1 styleName="name">{name}</h1>
        <div styleName="text">{text}</div>
        <a href="#" onClick={this.$handleClick}>NEXT</a>
      </section>
    )
  }
}
