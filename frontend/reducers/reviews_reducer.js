import {RECEIVE_PRODUCT} from '../actions/product_actions';
import {merge} from 'lodash';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PRODUCT:
      // if (!!state) {
      //   return Object.assign({}, action.product.reviews);
      // } else {
      //   const reviewArr = Object.values(action.product.reviews)
      //   let finalState = Object.assign({}, state)
      //   reviewArr.forEach( (review) => {
      //     return merge({}, finalState, {[review.id]: review});
      //   })
      // }
        let finalState = Object.assign({}, action.product.reviews);
        return finalState;
    default:
      return state;
  }
}

export default reviewReducer;
