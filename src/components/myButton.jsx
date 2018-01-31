/**
 * Created by bamorgans on 1/29/2018.
 */
import React from 'react';
import PropTypes from 'prop-types';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class myButton extends React.Component {
    render () {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <RaisedButton label={this.props.label} />
                </MuiThemeProvider>
            </div>
        );
    }
}

myButton.propTypes = {
    label: PropTypes.string
};
