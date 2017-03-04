import React, { PropTypes } from 'react'
import { Layout,
         Textbox,
         Background,
         Strip,
         Null } from 'Components'


class Scene extends React.Component {
  render() {
    return (
      <Layout>
        <Strip />
        <Textbox />
        <Background />
      </Layout>
    )
  }
}

export default Scene