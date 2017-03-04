import React, { PropTypes } from 'react'
import { Layout } from 'Components'


class Cut extends React.Component {
  static propTypes = {
    Textbox: PropTypes.element
  }

  render() {
    const { Textbox } = this.props

    return (
      <Layout>
        <h1>SOMETEXT</h1>
        <Textbox />
      </Layout>
    )
  }
}

export default Cut
