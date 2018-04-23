import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'material-ui/Button';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';



 /* class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
} */


const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
});


class App extends Component {
  render() {
    return (
   
     
  <MuiThemeProvider theme={theme}>
  <React.Fragment>
  <CssBaseline />
  <h1> Hello </h1>
  <h2> second header </h2 >
  <p> Let's check typing </p>
  <Button variant="raised" color="primary">
  Hello World
  </Button>
  <Button color="secondary">Secondary</Button>
  </React.Fragment>
  </MuiThemeProvider>
    );
  }
}



/*
const App = () => 

(
  // <MuiThemeProvider theme={theme}>
  //<React.Fragment>
  //<CssBaseline />
  <Button variant="raised" color="primary">
    Hello World
  </Button>
  //</React.Fragment>
  // </MuiThemeProvider>
);

*/
export default  App;
