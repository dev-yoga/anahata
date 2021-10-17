import axios from 'axios';
import { loadJwt } from './jwtService';

export async function getPoses() { 
    const response = await axios.get(`http://localhost:1377/api/pose`, { headers: {"Authorization" : `Bearer ${loadJwt()}`} });
    return response.data;
}