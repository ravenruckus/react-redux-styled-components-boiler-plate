// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'
import { GET_DATA_API } from '../../shared/routes'

export const DATA_REQUEST = 'DATA_REQUEST'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_FAILURE = 'DATA_FAILURE'

export const DataRequest = createAction(DATA_REQUEST)
export const DataSuccess = createAction(DATA_SUCCESS)
export const DataFailure = createAction(DATA_FAILURE)


export const getData = () => (dispatch: Function) => {
  dispatch(DataRequest())
  return axios.get(GET_DATA_API)
    .then((res) => {
      dispatch(DataSuccess(res.data))
    })
    .catch(() => {
      dispatch(DataFailure())
    })
}
