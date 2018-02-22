// @flow

import { APP_NAME } from '../shared/config'
import { GET_DATA_API } from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get('/', (req, res) => {
    res.send(renderApp(APP_NAME))
  })

  app.get(GET_DATA_API, (req, res) => {
    res.json({ image: 'https://s3-us-west-2.amazonaws.com/images.aliciagyori.com/dog_small.jpg' })
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })
}
