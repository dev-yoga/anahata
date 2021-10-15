import request from 'superagent';

export const getPoses = () => request.get('http://localhost:1377/api/pose');