import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

let storeWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
