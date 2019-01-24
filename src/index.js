import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import configStore from './store/config';
// Style
import './index.scss';
// Service Workers
import * as serviceWorker from './serviceWorker';
// Pages
import HomePage from './components/pages/HomePage';


// create redux store
const store = configStore();
console.log(222,store.getState());

// Subscribe
const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    // const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    // console.log(444,visibleExpenses);   
})


const jsx = (
    <Provider store={store}>
        <HomePage />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


