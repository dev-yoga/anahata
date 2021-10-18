import axios from 'axios';
import { loadJwt } from './jwtService';
import { loadUser } from './userIdService';

export async function getSequences() { 
    const response = await axios.get(`http://localhost:1377/api/sequence`, { headers: {"Authorization" : `Bearer ${loadJwt()}`} });
    return response.data;
}

export async function postSequence(sequenceName, poseIds) {
    const response = await axios.post(`http://localhost:1377/api/sequence`, { 
        data: {sequenceName, poses: poseIds},
        headers: {"Authorization" : `Bearer ${loadJwt()}`}
    });

    return response.data;
}

export async function getSequencesByUser() {
    const response = await axios.get(`http://localhost:1377/api/sequence/user/${loadUser()}`, 
    { headers: {"Authorization" : `Bearer ${loadJwt()}`}});
    return response.data;
}