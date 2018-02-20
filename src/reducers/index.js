import {combineReducers} from 'redux';
import LessonsReducer from './reducer_lessons';

const rootReducer = combineReducers({
    lessons: LessonsReducer
});

export default rootReducer;