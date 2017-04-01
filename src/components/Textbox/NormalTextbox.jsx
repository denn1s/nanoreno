import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Textbox.scss'


@CSSModules(styles)
export default class NormalTextbox extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onNext: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.$handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if (this.props.onNext) {
      event.preventDefault()
      this.props.onNext()
    }
  }

  render() {
    const { name, text } = this.props

    return (
      <section styleName="normal-textbox">
        <h1 styleName="name">{name}</h1>
        <div styleName="text">{text}</div>
        <a href="#" onClick={this.$handleClick} style={{ position: 'absolute', right: '30px', bottom: '30px', fontSize: '30px', fontWeight: 'bold'}}>NEXT</a>
      </section>
    )
  }
}
