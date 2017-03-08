import { createStore } from 'redux'


const initialState = {
  configs: require('Assets/configs.json'),
  cuts: require('Assets/cuts.json'),
  characters: require('Assets/characters.json'),
  spotlight: [   // TODO, make this depend on url to debug
    null,
    null,
    null,
    0
  ],
  cut: require('Assets/cuts.json')[0]
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SPOTLIGHT':
      return { ...state, spotlight: action.spotlight }
    case 'UPDATE_CUT':
      return { ...state, cut: action.cut }
    default:
      return state
  }
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store


export function updateSpotlight(newSpotlight) {
  return {
    type: 'UPDATE_SPOTLIGHT',
    spotlight: newSpotlight
  }
}

export function updateCut(cut) {
  return {
    type: 'UPDATE_CUT',
    cut: cut
  }
}
