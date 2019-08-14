import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';
import './assets/dev.css';
import AppRouter from './routes';
import * as serviceWorker from './serviceWorker';
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(<AppRouter />, rootElement);
} else {
    render(<AppRouter />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
