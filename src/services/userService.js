import request from 'superagent';

const baseUrl = process.env.FLOW_API

export const signUp = (username, password) => request.post(`${baseUrl}/signup`, {username, password,}).then(res => {
    return {
        user_id: res.body.user_id,
        token: res.body.token
    };
});