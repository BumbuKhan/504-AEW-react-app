import {combineReducers} from 'redux';
import LessonsReducer from './reducer_lessons';
import LessonWordsReducer from './reducer_lesson_words';

const rootReducer = combineReducers({
    lessons: LessonsReducer,
    curLessonWords: LessonWordsReducer
});

export default rootReducer;