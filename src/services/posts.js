import {customFetch} from './fetch'
import {setLoading, storePosts} from '../store/data/blog/actions'

export const getPosts = () => {
  return (dispatch, getState) => {
    const {posts} = getState().blog

    if (posts) {
      return
    }

    dispatch(setLoading(true))
    customFetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch(storePosts(data))
        dispatch(setLoading(false))
      })
  }
}