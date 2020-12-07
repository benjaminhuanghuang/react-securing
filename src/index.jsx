import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//
import Xss from './XSS-02-protect'
import XssDanger from './XSS-01-danger'


ReactDOM.render(<Xss />, document.getElementById('root'));