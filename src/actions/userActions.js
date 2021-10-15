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