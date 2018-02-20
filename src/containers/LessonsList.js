import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lesson from '../components/Lesson';

class LessonsList extends Component {
    render() {
        return (
            <Lesson />
        );
    }
}

function mapStateToProps(state) {
    return {lessons: state.lessons};
}

export default connect(mapStateToProps)(LessonsList);