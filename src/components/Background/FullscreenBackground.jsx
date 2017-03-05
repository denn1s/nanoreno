import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './Background.scss'


@connect(
  state => ({ configs: state.configs})
)
@CSSModules(styles)
export default class FullscreenBackground extends React.Component {
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
      <div styleName="fullscreen-background" style={{ backgroundColor: this.props.configs.mainBackgroundColor }}>
        <div styleName="image" style={{ backgroundImage: `url(${this.image})`, opacity: this.props.configs.mainBackgroundOpacity }}/>
      </div>
    )
  }
}
