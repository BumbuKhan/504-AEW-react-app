import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lesson from '../components/Lesson';

class LessonsList extends Component {
    getLessonsLis() {
        if (!this.props.lessons.length) {
            return 'No lessons yet';
        }

        return this.props.lessons.map((lesson) => {
            return <Lesson key={lesson.id} {...lesson}/>
        });
    }

    render() {
        return (
            <div>
                <div className="list-group">
                    {this.getLessonsLis()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {lessons: state.lessons};
}

export default connect(mapStateToProps)(LessonsList);