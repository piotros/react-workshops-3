import {SEARCH, SET_LOADING, STORE_POSTS} from "../../actionTypes"

const defaultState = {
  searchVal: '',
  posts: [],
  loading: false
}

const blogReducer = (state = defaultState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SEARCH:
      return {...state, searchVal: payload};
    case SET_LOADING:
      return {...state, loading: payload};
    case STORE_POSTS:
      return {...state, posts: payload};
    default:
      return state;
  }
}

export default blogReducer