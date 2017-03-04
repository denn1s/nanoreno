import 'babel-polyfill'
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import { Provider } from 'react-redux'

import store from './store'
import history from './history'

import Scene from './Scene'

// let routes = require('./scenes.json').default
const container = document.getElementById('container')

function renderComponent(component) {
  ReactDOM.render(<Provider store={store}>{component}</Provider>, container)
}

function render(location) {
  console.log('location', location)

  return renderComponent(<Scene />)

  // router.resolve(routes, location)
  //   .then(renderComponent)
  //   .catch(error => router.resolve(routes, { ...location, error }).then(renderComponent))
}

history.listen(render)
render(history.location)

FastClick.attach(document.body)

/*
if (module.hot) {
  module.hot.accept('./scenes.json', () => {
    routes = require('./scenes.json').default
    render(history.location)
  })
}
*/
