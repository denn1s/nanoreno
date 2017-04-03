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
  cut: require('Assets/cuts.json')[0],
  pageOn: "start"
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GAME': 
      return { ...state, pageOn:"game"}
    case 'CREDITS': 
      return { ...state, pageOn:"credits"}
    case 'UPDATE_SPOTLIGHT':
      return { ...state, spotlight: action.spotlight }
    case 'UPDATE_CUT':
      return { ...state, cut: action.cut }
    case 'ROTATE':
      const newSpotlight = []
      newSpotlight[0] = state.spotlight[1]
      newSpotlight[1] = state.spotlight[2]
      newSpotlight[2] = state.spotlight[3]
      const rising = state.spotlight[3] || state.spotlight[3] === 0 ? state.spotlight[3] + 1 : null // todo, handle trees, using next from cuts
      newSpotlight[3] = rising < state.cuts.length ? rising : null
      return {
        ...state,
        spotlight: newSpotlight,
        cut: state.cuts[newSpotlight[3]]
      }
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

export function rotate() {
  return {
    type: 'ROTATE'
  }
}


