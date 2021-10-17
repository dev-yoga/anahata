// import { Login } from '@mui/icons-material';
// import { Route } from 'react-router';
import request from 'superagent';
import { saveJwt } from './jwtService';
import { saveUser } from './userIdService';
import { EuroSymbolRounded } from '@material-ui/icons';
// const baseUrl = process.env.FLOW_API
// const baseUrl = 'http://localhost:1377/api'

export const signUp = (username, password) => request.post('http://localhost:1377/api/signup', {username, password,}).then(res => res.body);




export const signIn = (username, password) => request.post('http://localhost:1377/api/signin', {
    username,
    password,
}).then(res => {
    const jwt_token = {
        user_id: res.body.user_id,
        token: res.body.token
    }
    saveJwt(jwt_token.token);
    saveUser(jwt_token.user_id);
    return(jwt_token);
    
})


