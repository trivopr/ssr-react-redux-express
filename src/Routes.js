import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './client/pages/Home';
import UsersListPage from './client/pages/UsersList';
import App from './client/App';
import NotFoundPage from './client/pages/NotFoundPage';
import AdminsListPage from './client/pages/AdminsListPage';

const routes = [
    { 
        ...App,
        routes: [
            { 
                path: '/',
                exact: true,
                ...HomePage
            },
            {
                ...UsersListPage,
                path: '/users',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins',
                exact: true
            },
            {
                ...NotFoundPage,
                path: ""
            }
        ]
    }
  ]



export default routes