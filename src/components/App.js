import React, {Component} from 'react';
import LessonsList from '../containers/LessonsList';
import ViewLesson from '../containers/ViewLesson';
import {Route, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="container py-3">
                <h3>504 Absolutely Essential Words</h3>
                <br/>

                <Route exact path="/" component={LessonsList}/>
                <Route path="/lessons" render={() => {
                    return <Redirect to="/"/>
                }} />
                <Route path="/lessons/:id" component={ViewLesson}/>
            </div>
        );
    }
}

export default App;
