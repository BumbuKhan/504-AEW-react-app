import React, {Component} from 'react';
import LessonsList from '../containers/LessonsList';
import ViewLesson from '../containers/ViewLesson';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h3>504 Absolutely Essential Words</h3>
                <br/>

                <LessonsList />
                <ViewLesson />
            </div>
        );
    }
}

export default App;
