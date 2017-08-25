import {SEARCH, STORE_POSTS, SET_LOADING} from "../../actionTypes"

export const search = searchVal => {
  return {
    type: SEARCH,
    payload: searchVal
  }
}

export const storePosts = posts => {
  return {
    type: STORE_POSTS,
    payload: posts
  }
}

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    payload: loading
  }
}