/**
 * Created by bamorgans on 6/7/2016.
 */
import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class myButton extends React.Component {
    render () {
        console.log('in myButton');
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <RaisedButton label={this.props.label} />
                </MuiThemeProvider>
            </div>
        )
    }
};