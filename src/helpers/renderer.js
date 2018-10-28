import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Routes from '../Routes';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';


export default (req, store, context) => {

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            </head>
            <body>
                <div id="root">${content}</div>

                <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src="clientBundle.js"></script>
            </body>
        </html>
    `;
}