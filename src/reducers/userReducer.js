import { SIGN_IN, SIGN_IN_DONE, SIGN_UP, SIGN_UP_DONE, SIGN_OUT } from '../actions/userActions';
import store from '../store';
import { signIn, signUp } from '../services/userService';

export default function userReducer(state = null, action) {
  // There are two actions each for sign in and sign up because the second action is needed to handle the API response
  switch(action.type) {
    case SIGN_IN:
      // calls the sign in API method
      signIn(action.username, action.password)
        .then(res => store.dispatch(action.resolveAction(res.user_id, res.token)))
        .catch(err => console.log(err));
      return state;
    case SIGN_UP:
      // calls the sign up API method
      signUp(action.username, action.password)
        .then(res => store.dispatch(action.resolveAction(res.user_id, res.token)))
        .catch(err => console.log(err));
      return state;
      // update the state with the API response
    case SIGN_IN_DONE:
    case SIGN_UP_DONE:
      return Object.assign({}, state, {
        username: action.username,
        token: action.token,
      });
    case SIGN_OUT:
      // nulls out user state
      return null;
  }
  return state;
}