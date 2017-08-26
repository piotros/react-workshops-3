import {SEARCH, SET_LOADING, STORE_POSTS} from '../../actionTypes'

import {handleActions} from 'redux-actions'

const defaultState = {
  searchVal: '',
  posts: undefined,
  loading: false
}

const blogReducer = handleActions({
  [SEARCH]: (state, {payload}) => ({...state, searchVal: payload}),
  [SET_LOADING]: (state, {payload}) => ({...state, loading: payload}),
  [STORE_POSTS]: (state, {payload}) => ({...state, posts: payload})
}, defaultState)

export default blogReducer