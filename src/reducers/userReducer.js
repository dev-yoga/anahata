import { SIGN_IN, SIGN_IN_DONE, SIGN_UP, SIGN_UP_DONE, SIGN_OUT } from '..actions/userActions';
import store from '../store';
import { signIn, signUp } from '../services/userService';

export default function userReducer(state = null, action) {

    switch(action.type) {
      case SIGN_IN:
        signIn(action.username, action.password)
          .then(res => store.dispatch(action.resolveAction(res.user_id, res.token)))
          .catch(err => console.log(err));
        return state;
      case SIGN_UP:
        signUp(action.username, action.password)
          .then(res => store.dispatch(action.resolveAction(res.user_id, res.token)))
          .catch(err => console.log(err));
        return state;
      case SIGN_IN_DONE:
      case SIGN_UP_DONE:
        return Object.assign({}, state, {
          username: action.username,
          token: action.token,
        });
      case SIGN_OUT:
        return null;
    }
    return state;
  }