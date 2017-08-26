import {SEARCH, STORE_POSTS, SET_LOADING} from '../../actionTypes'
import {createAction} from 'redux-actions'

export const search = createAction(SEARCH)
export const storePosts = createAction(STORE_POSTS)
export const setLoading = createAction(SET_LOADING)