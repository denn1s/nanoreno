import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateSpotlight } from 'Actions'
import NormalTextbox from './NormalTextbox'


@connect(
  state => ({ cuts: state.cuts, spotlight: state.spotlight }),
  { updateSpotlight }
)
export default class Textbox extends React.Component {
  constructor(props) {
    super(props)

    this.$handleRotate = this.handleRotate.bind(this)
  }

  handleRotate(choiceNode = false) {
    if (!choiceNode) {
      const newSpotlight = []
      newSpotlight[0] = this.props.spotlight[1]
      newSpotlight[1] = this.props.spotlight[2]
      newSpotlight[2] = this.props.spotlight[3]
      const rising = this.props.spotlight[3] ? this.props.spotlight[3] + 1 : null // todo, handle trees, using next from cuts
      newSpotlight[3] = rising < this.props.cuts.length ? rising : null
      this.props.updateSpotlight(newSpotlight)
    }
  }

  render() {
    // TODO: get text from state and also textbox kind

    return (
      <NormalTextbox text="navigation refactor" name="Schoolgirl A" onNext={this.$handleRotate} />
    )
  }
}
