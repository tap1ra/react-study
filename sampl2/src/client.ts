import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

const initialData = document.getElementById('initial-data') || undefined;
const initialDataString = initialData ? initialData.getAttribute('data-json') : '';
const initialDataJson = JSON.parse(initialDataString || '');

ReactDOM.hydrate(
   <App />
    ,document.getElementById('app'));