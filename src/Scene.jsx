import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Layout,
         Textbox,
         Background,
         Music,
         Strip,
         Null } from 'Components'


class Scene extends React.Component {
  render() {
    return (
      <Layout>
        <Strip />
        <Textbox />
        <Background />
        <Music />
      </Layout>
    )
  }
}

export default Scene
