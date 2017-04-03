import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import styles from './main.scss'
import store from './store'

import Scene from './Scene'
import Start from './Start'
import Credits from './Credits'

@connect(
  state => ({ pageOn: state.pageOn })
)
@CSSModules(styles)
class MainGame extends React.Component {

  render() {
    let current = null;
    console.log(store.getState().pageOn);
    if(this.props.pageOn == "start"){
        current = <Start />;
    }else if(this.props.pageOn == "game"){
        current = <Scene />;
    }else {
        current = <Credits />;
    }
    return (
       current
    )
  }
}

export default MainGame