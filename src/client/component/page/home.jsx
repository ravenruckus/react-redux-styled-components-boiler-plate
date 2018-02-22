// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../../shared/config'

const title = APP_NAME

const HomePage = () =>

<div>

  <Helmet
    title={title}
    meta={[
      { name: 'description', content: 'Boiler Plate - React, Redux, Styled-Components' }
    ]}
  />

  <p>Home</p>

</div>

export default HomePage
