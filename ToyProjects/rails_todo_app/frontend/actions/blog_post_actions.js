
import * as APIUtil from '../util/blog_post_util';

export const RECEIVE_BLOG_POST = 'RECEIVE_BLOG_POST';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST';
export const ADD_COMMENT_TO_COMMENT = 'ADD_COMMENT_TO_COMMENT';

export const addBlogPost = post => ({
  type: RECEIVE_BLOG_POST,
  post
})

export const removePost = post => ({
  type: REMOVE_POST,
  post
})

export const receiveAllPosts = allPosts => ({
  type: RECEIVE_ALL_POSTS,
  allPosts
})

export const addCommentToPost = comment => ({
  type: ADD_COMMENT_TO_POST,
  comment,
})

export const addCommentToComment = comment => ({
  type: ADD_COMMENT_TO_COMMENT,
  comment,
})

export const createPost = (post) => dispatch => (
  APIUtil.createPost(post).then(post => (
      dispatch(addBlogPost(post))),
      err => (
        dispatch(receiveErrors(err.responseJSON))
      )
  )
)

export const fetchAllPosts = () => dispatch => (
  APIUtil.fetchPosts().then(allPosts => (
    dispatch(receiveAllPosts(allPosts))
  ), err => dispatch(receiveErrors(err.responseJSON)))
)

export const createComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(addCommentToPost(comment))
  ), err => dispatch(receiveErrors(err.responseJSON))
  )
)

export const createCommentOnComment = comment => dispatch => (
  APIUtil.createComment(comment).then(comment => (
    dispatch(addCommentToComment(comment))
  ), err => dispatch(receiveErrors(err.responseJSON))
  )
)

export const deletePost = post => dispatch => (
  APIUtil.deletePost(post).then((post) => (
    dispatch(removePost(post)))
  ))