import React, { PropTypes } from 'react'
import { Layout, Null } from 'Components'


class Cut extends React.Component {
  static propTypes = {
    textbox: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.elements = {
      Textbox: (require('Components')[props.textbox] || Null)
    }
  }

  render() {
    const { Textbox } = this.elements

    return (
      <Layout>
        <h1>SOMETEXT</h1>
        <Textbox name="Schoolgirl B" text="Sample text"/>
      </Layout>
    )
  }
}

export default Cut
