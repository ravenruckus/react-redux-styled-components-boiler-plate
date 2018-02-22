// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route, Redirect } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Nav from './component/nav'
import HomePage from './component/page/home'
import PageWithData from './container/page_with_data_container'
import PageNotFound from './component/page/not_found'

import {
  HOME_PAGE_ROUTE,
  PAGE_WITH_DATA_ROUTE,
  PAGE_NOT_FOUND_ROUTE
} from '../shared/routes'
// change ImageContain to Page with data
const baseStyles = () => injectGlobal`
  ${reset}
  body {
    width: 1100px;
    margin: auto;
    margin-top: 25px;
    font-family: sans-serif;
  };
  h1 {
    color: limegreen;
    font-size: 1.2rem;
  };
`

const App = () => {
  baseStyles()
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path={ HOME_PAGE_ROUTE } render={() => <HomePage />} />
        <Route path={ PAGE_WITH_DATA_ROUTE } render={() => <PageWithData />} />
        <Route component={ PageNotFound } />
      </Switch>
    </div>
  )
}

export default App
