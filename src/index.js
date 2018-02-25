import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import {BrowserRouter as Router} from 'react-router-dom';

import reducers from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let storeWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Router>
        <Provider store={storeWithMiddleware(reducers)}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
