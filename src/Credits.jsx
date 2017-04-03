import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './main.scss'


@CSSModules(styles)
class Credits extends React.Component {
  render() {
    return (
      <div styleName='credits'>
        {"THANK YOU FOR PLAYING Game By Oscar & Dennis"}
      </div>
    )
  }
}

export default Credits
