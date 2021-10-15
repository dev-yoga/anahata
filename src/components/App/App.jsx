import React, { useState, useEffect } from 'react';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import store from '../../store';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';


export default function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  function handleStateChange() {
    const state = store.getState();
    localStorage.setItem('state', JSON.stringify(state));
  }

  const theme = createTheme({
    palette: {
      type: isLightMode ? 'light' : 'dark',
      primary: {
        main: '#138D75'
      },
      secondary: {
        main:'#DAF7A6'
      }
    },
  });

  function toggleMode() {
    setIsLightMode(!isLightMode);
  }

  useEffect(() => {
    store.subscribe(handleStateChange);
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Navigation toggleMode={toggleMode}/>
        <Switch>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}