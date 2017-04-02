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
    kind: PropTypes.string,
    number: PropTypes.string,
    ext: PropTypes.string,
    filename: PropTypes.string
  }

  static defaultProps = {
    ext: 'jpg'
  }

  constructor(props) {
    super(props)
    this.state = {
      image: this.getImage(props)
    }
  }

  getImage(props) {
    if (props.filename) {
      return require(`Assets/backgrounds/${props.filename}`)
    } else if (props.kind && props.number && props.ext) {
      return require(`Assets/backgrounds/${props.kind}/${props.number}.${props.ext}`)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      image: this.getImage(nextProps)
    })
  }

  render() {
    return (
      <div styleName="fullscreen-background" style={{ backgroundColor: this.props.configs.mainBackgroundColor }}>
        { this.state.image && <div styleName="image" style={{ backgroundImage: `url(${this.state.image})`, opacity: this.props.configs.mainBackgroundOpacity }}/> }
      </div>
    )
  }
}
