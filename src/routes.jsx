import React from 'react';
import {Router, Route} from 'react-router-dom';
import {browserHistory} from 'react-router';
import App from './app.jsx';


const NotFound = () => (
  <h1>404.. This page is not found!</h1>);

export default function() {
  return (<Router >
    <Route path='/' component={App}/>
        <Route path='*' component={NotFound} />
  </Router>)

}
