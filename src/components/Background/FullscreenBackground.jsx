import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Background.scss'


class FullscreenBackground extends React.Component {
  static propTypes = {
    kind: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    ext: PropTypes.string
  }

  static defaultProps = {
    ext: 'jpg'
  }

  constructor(props) {
    super(props)
    this.image = require(`Assets/backgrounds/${props.kind}/${props.number}.${props.ext}`)
  }

  render() {
    return (
      <img styleName="fullscreen-background" src={this.image} />
    )
  }
}

export default CSSModules(FullscreenBackground, styles)
