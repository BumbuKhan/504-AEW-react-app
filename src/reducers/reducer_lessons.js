import {FETCH_LESSONS} from '../actions';
const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_LESSONS:
            console.log(action.payload.data.items);
            return {lessons: action.payload.data.items};
        default:
            console.log('001');
            return state;
    }
}