import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './main.scss'
import store from './store'


@CSSModules(styles)
class Start extends React.Component {

  constructor(props){
    super(props);
    this.$handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    console.log("yo");
    store.dispatch(toGame());
    console.log(store.getState());
  }

  render() {
    const image = require('Assets/ui/Promo.png');
    return (
      <div style={{ backgroundImage: `url(${image})` }} styleName='start-background'>
        <a onClick={this.$handleClick} styleName='start-button'>Start</a>
      </div>
    )
  }
}

export default Start

function toGame(){
  return {
    type: 'GAME'
  }
}