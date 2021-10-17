export function saveUser(user_id) {
    sessionStorage.setItem('user', user_id);
}

export function loadUser() {
    return sessionStorage.getItem('user');
}