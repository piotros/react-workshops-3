import {SEARCH, STORE_POSTS, SET_LOADING} from '../../actionTypes'
import {createActions} from 'redux-actions'

export const {search, storePosts, setLoading} = createActions(
  SEARCH,
  STORE_POSTS,
  SET_LOADING
)
