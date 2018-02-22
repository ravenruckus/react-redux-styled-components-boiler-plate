// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  PAGE_WITH_DATA_ROUTE,
} from '../../shared/routes'

const Nav = () =>

  <nav>

    <ul>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: PAGE_WITH_DATA_ROUTE, label: 'Page With Data'}
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'blue' }} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>

  export default Nav
