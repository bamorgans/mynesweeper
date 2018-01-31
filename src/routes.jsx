import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import App from './app.jsx';


const NotFound = () => (
    <h1>404.. This page is not found!</h1>);

export default function () {
    return (
        <HashRouter>
            <Switch>
                <Route exact name='App' path='/' component={App}/>
                <Route name='404' path='/settings' component={NotFound}/>
            </Switch>
        </HashRouter>);
}
