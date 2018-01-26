import React from 'react';
import ReactDOM from 'react-dom';
import  Routes from './src/routes.js';
import App from './src/app.jsx';

var routes = new Routes();
ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
