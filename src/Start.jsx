import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.scss'


@CSSModules(styles)
class Start extends React.Component {
  render() {
    const image = require('Assets/ui/Promo.png')
    return (
      <div style={{ backgroundImage: `url(${image})` }} styleName='start-background'>
        <a href="/game" styleName='start-button'>Start</a>
      </div>
    )
  }
}

export default Start
