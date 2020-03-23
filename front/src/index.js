import React from 'react';
import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import App from './components/App';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer)

render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root')
    );