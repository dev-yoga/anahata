export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_DONE = 'SIGN_UP_DONE';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_DONE = 'SIGN_IN_DONE';
export const SIGN_OUT = 'SIGN_OUT';

export function signUp(username, password) {
    return {
        type: SIGN_UP,
        username,
        password,
        resolveAction: (username, token) => {
            return {
                type: SIGN_UP_DONE,
                username,
                token
            };
        }
    };
}

export function signIn(username, password) {
    return {
      type: SIGN_IN,
      username,
      password,
      // the resolveAction is the second step for updating the state with the API response (see: reducer SIGN_IN_DONE)
      resolveAction: (username, token) => {
        return {
          type: SIGN_IN_DONE,
          username,
          token
        };
      }
    };
  }
  
  export function signOut() {
    return {
      type: SIGN_OUT
    };
  }