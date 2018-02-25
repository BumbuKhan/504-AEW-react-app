import {FETCH_LESSON_WORDS} from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_LESSON_WORDS:
            return action.payload.data;
        default:
            return state;
    }
}