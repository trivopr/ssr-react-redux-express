import "babel-polyfill";
import express from "express";
import {matchRoutes} from 'react-router-config';
import Routes from './Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import  proxy from 'express-http-proxy';

const app = express();

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
      }
    })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
    let store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null

    }).map((promise) => {   // Handle Reject Break Promise as Admins List
        if (promise) {
            return new Promise((resolve, reject) => {
                promise.then(resolve).catch(resolve)
            });
        }
    })

    Promise.all(promises).then(() => {
        const context = {};
        let componentRender = renderer(req, store, context);

        // Handle Redirect without Auth
        console.log("Context Here:", context);
        if (context.url) {
            return res.redirect(context.url);
        }

        // Handle Not Found Page
        if (context.isNotFoundPage) {
            res.status(404);
        }
        res.send(componentRender);
    })

})

app.listen(3000, function() {
    console.log('app run on 3000');
});
