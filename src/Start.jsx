import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.scss'


@CSSModules(styles)
class Start extends React.Component {
  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }
}

export default Start
