import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import NormalTextbox from './NormalTextbox'


@connect(
  state => ({ cut: state.cut, characters: state.characters })
)
export default class Textbox extends React.Component {
  render() {
    // TODO: let someone else handle game over
    if (this.props.cut) {
      const { skit, text } = this.props.cut
      const [ character, emotion ] = skit.split(' ')
      const char = this.props.characters[character]

      return (
        <NormalTextbox text={text} name={char.name} />
      )
    } else {
      setTimeout(() => { window.location = '/credits' }, 3000)
      return <div />
    }
  }
}
