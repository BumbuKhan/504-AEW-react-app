import React, {Component} from 'react';
import Word from '../components/Word';
import {connect} from 'react-redux';
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
                console.log(this.props);
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
                    <h4 className="mb-3">{this.props.lessonData.title}</h4>
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