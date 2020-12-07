import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//
import Xss from './XSS-protected'
import XssDanger from './XSS-danger'


ReactDOM.render(<XssDanger />, document.getElementById('root'));