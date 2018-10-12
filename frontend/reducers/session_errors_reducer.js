import {CLOSE_MODAL} from '../actions/modal_actions'
import {ERRORS_CURRENT_USER, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ERRORS_CURRENT_USER:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;
