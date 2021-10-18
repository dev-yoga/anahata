import axios from 'axios';
import { loadJwt } from './jwtService';
import { loadUser } from './userIdService';

export async function getSequences() { 
    const response = await axios.get(`http://localhost:1377/api/sequence`, { headers: {"Authorization" : `Bearer ${loadJwt()}`} });
    return response.data;
}

export async function postSequence(sequenceName, poseIds) {
    const response = await axios.post(`http://localhost:1377/api/sequence`, { 
        data: {sequenceName, poses: poseIds, user: loadUser()},
        headers: {"Authorization" : `Bearer ${loadJwt()}`}
    });

    return response.data;
}

export async function getSequencesByUser() {
    const response = await axios.get(`http://localhost:1377/api/sequence/user/${loadUser()}`, 
    { headers: {"Authorization" : `Bearer ${loadJwt()}`}});
    console.log(loadUser());
    return response.data;
}

export async function getSequenceById(sequenceId) {
    const response = await axios.get(`http://localhost:1377/api/sequence/${sequenceId}`,
    { headers: {"Authorization" : `Bearer ${loadJwt()}`}});
    return response.data;
}

// once I have other users secure so users can only delete their own sequences obvs
export async function deleteSequenceById(sequenceId) {
    await axios.delete(`http://localhost:1377/api/sequence/${sequenceId}`,
    { headers: {"Authorization" : `Bearer ${loadJwt()}`}});
}

// edit Sequence (sequenceName, poses, user)

export async function editSequence(sequenceName, poseIds, sequenceId) {
    const response = await axios.put(`http://localhost:1377/api/sequence/${sequenceId}`, { 
        data: {sequenceName, poses: poseIds, user: loadUser()},
        headers: {"Authorization" : `Bearer ${loadJwt()}`}
    });

    return response.data;
}

// A route that passes a sequenceId to display a single sequence

