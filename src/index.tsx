import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "firebase/auth";
import firebase from "firebase/compat/app";

ReactDOM.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>,
    document.getElementById('root')
);