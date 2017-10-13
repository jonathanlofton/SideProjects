import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_action';

const SessionReducer = (state, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER: 
      const { currentUser } = action;
      return Object.assign(state, {}, { currentUser });
    default:
      return state;
  }

};

export default SessionReducer;