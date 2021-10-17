export function saveJwt(token) {
    sessionStorage.setItem('jwt', token);
}

export function loadJwt() {
    return sessionStorage.getItem('jwt');
}