import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//
import {default as Demo} from './xss/XSS-02-protect'
import XssDanger from './XSS-01-danger'


ReactDOM.render(<Demo />, document.getElementById('root'));