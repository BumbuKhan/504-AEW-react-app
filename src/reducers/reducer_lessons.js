import {FETCH_LESSONS} from '../actions';
const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_LESSONS:
            return [...action.payload.data.items];
        default:
            return state;
    }
}