import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lesson from '../components/Lesson';
import {fetchLessons} from '../actions';

class LessonsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        this.props.fetchLessons()
            .then(() => {
                this.setState({
                    isLoading: false
                });
            })
    }

    getLessonsList() {
        if (this.state.isLoading) {
            return 'Loading...';
        }

        if (!this.props.lessons.length && !this.state.isLoading) {
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
                    {this.getLessonsList()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {lessons: state.lessons};
}

export default connect(mapStateToProps, {fetchLessons})(LessonsList);