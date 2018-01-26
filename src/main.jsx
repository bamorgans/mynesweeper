import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MyButton from './components/myButton.jsx';
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
    }
  }

  render() {
    console.log('in hello world');
    let styles = this.getStyles();
    let children = this.props.children;
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <AppBar title="sWeather"/>
            <MyButton label="SeDarch"/>
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
        <h2> {this.props.children.join(' ')}</h2>
      </div>
    )
  }
};
