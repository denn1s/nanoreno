import React, { PropTypes } from 'react'
import { Layout, Null } from 'Components'


class Cut extends React.Component {
  static propTypes = {
    textbox: PropTypes.string,
    text: PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.elements = {
      Textbox: (require('Components')[props.textbox] || Null)
    }
  }

  render() {
    const { text } = this.props
    const { Textbox } = this.elements

    return (
      <Layout>
        <Textbox name="Schoolgirl B" text={text} />
      </Layout>
    )
  }
}

export default Cut
