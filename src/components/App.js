import React, {Component} from 'react';
import LessonsList from '../containers/LessonsList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h3>504 Absolutely Essential Words</h3>
                <br/>

                <LessonsList />
            </div>
        );
    }
}

export default App;
