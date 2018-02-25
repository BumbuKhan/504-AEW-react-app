import axios from 'axios';

const API_URL = 'http://api.504.bumbu.tv';
export const FETCH_LESSONS = 'fetch_lessons';
export const FETCH_LESSON_WORDS = 'fetch_lesson_words';

export function fetchLessons() {
    const request = axios.get(`${API_URL}/lessons`);

    return {
        type: FETCH_LESSONS,
        payload: request
    }
}

export function fetchLessonWords(lessonId) {
    const request = axios.get(`${API_URL}/lessons/${lessonId}?expand=words`);

    return {
        type: FETCH_LESSON_WORDS,
        payload: request
    };
}