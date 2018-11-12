import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';
import { store } from "./src/store";
import { Provider } from "react-redux";

const app = <Provider store={store}>
                <App/>
            </Provider>

ReactDOM.render(app  ,document.getElementById('app'));