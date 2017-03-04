import { createStore } from 'redux'


const initialState = {
  configs: require('Assets/configs.json'),
  cuts: require('Assets/cuts.json'),
  characters: require('Assets/characters.json')
}


const reducer = (state = initialState, action) => {
  switch (action.type) {
     case 'COUNT':
      return { ...state, count: (state.count) + 1 };
    default:
      return state;
  }
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
