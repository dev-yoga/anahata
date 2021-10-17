import axios from 'axios';

// export const getPoses = () => request.get('http://localhost:1377/api/pose');
// const [ poses, setPoses] = useState([]);
// const [ requestError, setRequestError] = useState();

// const getPoses = useCallback(async () => {
//     try {
//         const result = await axios.get(`http://localhost:1377/api/pose`);
//         setPoses(result.data);
//     } catch (err) {
//         setRequestError(err.message);
//     }
// });

export async function getPoses() { 
    const response = await axios.get(`http://localhost:1377/api/pose`, { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4ZWFiNjUwMzZhZjg1MTc5NWRlNzMiLCJ1c2VybmFtZSI6ImxlbmEiLCJwYXNzd29yZCI6IiQyYiQxMCRpL2FIV3RZd290dUhpV0Vqc0d2aVN1ZXFKeW9XSzh6ZEFhWG93SGNSY0FXV080NFlQVGlpeSIsIl9fdiI6MCwiaWF0IjoxNjM0NDM1ODAyfQ.PzU-r6Ikn0uKSGfVj9i0bcN46q35RrcjNCXZxkX8Kkk`} });
    return response.data;
}