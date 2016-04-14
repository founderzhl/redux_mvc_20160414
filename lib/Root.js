/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css'

import React, { PropTypes } from 'react'
import { Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import configureStore from './utils/configure-store'
import * as storage from './persistence/storage'
import * as components from './components'

const {
  Application,
  Lc,
  About,
  Hello
} = components

const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en',
    user: { permissions: [/*'manage_account'*/] }
  }
}

export const store = configureStore(initialState)

function getRootChildren (props) {
  const intlData = {
    locale: props.application.locale,
  }
  const rootChildren = [
    <IntlProvider key="intl" {...intlData}>
      {renderRoutes()}
    </IntlProvider>
  ]

  if (__DEVTOOLS__) {
    const DevTools = require('./components/DevTools').default
    rootChildren.push(<DevTools key="devtools" />)
  }
  return rootChildren
}

function renderRoutes () {
  return (
    <ReduxRouter>
      <Route component={Application}>
        <Route path="/" component={Lc} />
        <Route path="about" component={About} />
        <Route path="hello" component={Hello} />
      </Route>
    </ReduxRouter>
  )
}

class Root extends React.Component {
  static propTypes = {
    application: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
  }
}

export default connect(({ application }) => ({ application }))(Root)
