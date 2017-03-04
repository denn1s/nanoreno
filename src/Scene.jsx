import React, { PropTypes } from 'react'
import { Layout,
         Textbox,
         Background,
         Null } from 'Components'


class Scene extends React.Component {
  render() {
    return (
      <Layout>
        <Textbox />
        <Background />
      </Layout>
    )
  }
}

export default Scene
