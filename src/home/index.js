import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Layout from '../../components/Layout'
import styles from './styles.scss'

class HomePage extends React.Component {
  render() {
    return (
      <Layout styleName="layout">
        <section styleName="section">
          <h1 styleName="main-title">
            Hello world
          </h1>
        </section>
      </Layout>
    )
  }

}

export default CSSModules(HomePage, styles);
