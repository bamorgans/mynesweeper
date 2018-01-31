import React from 'react';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MyButton from './myButton.jsx';
import Paper from 'material-ui/Paper';

export default class Main extends React.Component {
    getStyles() {
        return {
            body: {
                height: '100%',
                background: '#f3f3f3',
                fontFamily: 'Roboto'
            },
            content: {
                marginLeft: 130,
                paddingTop: 60,
                display: 'flex'
            },
            paperStyle: {
                height: 100,
                width: 100,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block'
            }
        };
    }

    render() {
        let styles = this.getStyles();
        const { children } = this.props;
        let childNames = React.Children.map(children, child => child.props.children);

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        <AppBar title="React-es6-webpack-sample"/>
                        <MyButton label="Search"/>
                        <h1>-- Main.jsx --</h1>
                        <div>
                            <Paper style={styles.paperStyle} zDepth={4}/>
                            <Paper style={styles.paperStyle} zDepth={2}/>
                            <Paper style={styles.paperStyle} zDepth={3}/>
                            <Paper style={styles.paperStyle} zDepth={4}/>
                            <Paper style={styles.paperStyle} zDepth={5}/>
                        </div>
                    </div>
                </MuiThemeProvider>
                <h2> {childNames.join(' ')}</h2>
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.array
};

