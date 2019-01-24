import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import configureStore from './store/config';
// Style
import './index.scss';
// Service Workers
import * as serviceWorker from './serviceWorker';
// Pages
import HomePage from './components/pages/HomePage';


const jsx = (
    <Provider store={configureStore()}>
        <HomePage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


