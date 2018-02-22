// @flow
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Image from '../image'

type Props = {
  image: string,
  HandleDataFetch: Function,
}

export default class PageWithData extends Component<Props> {
   componentDidMount() {
    this.getData()
  }

  getData() {
    this.props.HandleDataFetch()
  }

  render() {
    const title = 'Image'

    return (
      <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Boiler Plate - React, Redux, Styled-Components. This page is an example of geting data from an api call.' }
        ]}
      />

      <Image image={this.props.image}/>

    </div>
    )
  }
  }
