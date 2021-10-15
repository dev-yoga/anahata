import request from 'superagent';

// const baseUrl = process.env.FLOW_API
// const baseUrl = 'http://localhost:1377/api'

export const signUp = (username, password) => request.post('http://localhost:1377/api/signup', {username, password,}).then(res => res.body);

export const signIn = (username, password) => request.post('http://localhost:1377/api/signin', {
    username,
    password,
}).then(res => {
    return {
        user_id: res.body.user_id,
        token: res.body.token
    }
})