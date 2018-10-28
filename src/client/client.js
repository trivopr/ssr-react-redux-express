import "babel-polyfill";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../Routes';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {fetchUser} from './actions';
import rootReducer from './reducers/index';
import axios from 'axios';

/**
 * INTEGRATE REDUX DEVTOOLS
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const axiosInstance = axios.create({
    baseURL: '/api'
});


let store = createStore(rootReducer, window.INITIAL_STATE, composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))));


class AppContent extends Component {
    render () {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {renderRoutes(Routes)}
                </BrowserRouter>
            </Provider>
        );
    }
}


ReactDOM.hydrate(<AppContent />, document.getElementById('root'));

