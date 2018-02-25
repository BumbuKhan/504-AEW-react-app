import React, {Component} from 'react';
import LessonsList from '../containers/LessonsList';
import {Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="container py-3">
                <h3>504 Absolutely Essential Words</h3>
                <br/>

                <Route exact path="/" component={LessonsList} />
            </div>
        );
    }
}

export default App;
