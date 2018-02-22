// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE,
} from '../action/general'

const initialState = Immutable.fromJS({
  image: 'initial state',
})

const generalReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case DATA_REQUEST:
      return state.set('image', 'loading')
    case DATA_SUCCESS:
      return state.set('image', action.payload.image)
    case DATA_FAILURE:
      return state.set('image', 'No image received.')
    default:
      return state
  }
}

export default generalReducer
