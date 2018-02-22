// @flow
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PageWithData from '../component/page/page_with_data'
import { getData } from '../action/general'

const mapStateToProps = state => ({
  image: state.general.get('image'),
})

const mapDispatchToProps = dispatch => ({
  HandleDataFetch: () => {
    dispatch(getData())
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageWithData))
