import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Word from '../components/Word';
import {fetchLessonWords} from '../actions';

class ViewLesson extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        const lessonId = this.props.match.params.id;

        this.props.fetchLessonWords(lessonId)
            .then(() => {
                this.setState({
                    isLoading: false,
                });
            });
    }

    getWords() {
        if (this.state.isLoading) {
            return 'Loading...';
        }

        if (!this.state.isLoading && !this.props.lessonData.words.length) {
            return 'No words yet'
        } else {
            let words = this.props.lessonData.words.map((word) => {
                return <Word key={word.id} {...word}/>
            });

            return (
                <div>
                    <div className="mb-3">
                        <Link to="/" className="btn btn-outline-primary btn-sm">
                            &larr;&nbsp;All lessons
                        </Link>
                        &nbsp;&nbsp;<span style={{fontSize : '20px', fontWeight : 'bold'}}>{this.props.lessonData.title}</span>
                    </div>
                    {words}
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.getWords()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {lessonData: state.curLessonWords};
}

export default connect(mapStateToProps, {fetchLessonWords})(ViewLesson);