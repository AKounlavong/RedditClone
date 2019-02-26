import { UPVOTE, DOWNVOTE } from './../constants';
// uncomment to import your constants into your actions
// import {  } from '../constants'

/**
 *    Create your action creators here:
 *    > Should return an object with at least a 'type' attribute
 *    > Don't forget to export your functions
 */
export const upvotePost = postId => ({ type: UPVOTE, id: postId})
export const downvotePost = postId => ({ type: DOWNVOTE, id: postId})