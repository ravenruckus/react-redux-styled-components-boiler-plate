// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = "Page Not Found"

const PageNotFound = () =>

  <div>

    <Helmet
      title={title}
      meta={[
        {name: 'description', content: 'Boiler Plate - React, Redux, Styled-Components'}
      ]}
    />

    <p>Page not found</p>

  </div>

  export default PageNotFound
