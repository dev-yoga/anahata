import axios from 'axios';

export async function getSequences() { 
    const response = await axios.get(`http://localhost:1377/api/sequence`, { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4ZWFiNjUwMzZhZjg1MTc5NWRlNzMiLCJ1c2VybmFtZSI6ImxlbmEiLCJwYXNzd29yZCI6IiQyYiQxMCRpL2FIV3RZd290dUhpV0Vqc0d2aVN1ZXFKeW9XSzh6ZEFhWG93SGNSY0FXV080NFlQVGlpeSIsIl9fdiI6MCwiaWF0IjoxNjM0NDM1ODAyfQ.PzU-r6Ikn0uKSGfVj9i0bcN46q35RrcjNCXZxkX8Kkk`} });
    return response.data;
}