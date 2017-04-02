import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.scss'


@CSSModules(styles)
class Credits extends React.Component {
  render() {
    return (
      <div>
        THANK YOU FOR PLAYING
      </div>
    )
  }
}

export default Credits
