/**
 * Created by bamorgans on 5/28/2016.
 */
import React from 'react';
import Main from './main.jsx';


export default class App extends React.Component{
  render() {
    return <div>
      <Main  children={['mike','bob','suzy','Mark']}/>
      <div>
        Hello, bs React Router!</div>
    </div>
  }
}

