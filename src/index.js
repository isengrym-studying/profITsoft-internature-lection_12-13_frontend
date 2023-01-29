import React from 'react';
import { Provider } from 'react-redux';
import App from './app/containers/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {store} from "./app";
import { render } from 'react-dom';

const root = document.getElementById('root')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
)

reportWebVitals();
