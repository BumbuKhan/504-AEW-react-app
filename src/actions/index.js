import axios from 'axios';

const API_URL = 'http://api.504.bumbu.tv';
export const FETCH_LESSONS = 'fetch_lessons';

export function fetchLessons() {
    const request = axios.get(`${API_URL}/lessons`);

    return {
        type: FETCH_LESSONS,
        payload: request
    }
}