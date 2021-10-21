import React, { useState, useEffect } from 'react';
import Home from '../../containers/Home/Home';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import SignOut from '../../containers/SignOut/SignOut';
import Sequence from '../Sequence/Sequence';
import Sequences from '../Sequences/Sequences';
import PoseSelect from '../PoseSelect/PoseSelect';
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
        main: '#666666'
      },
      secondary: {
        main:'#000000'
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
        <Navigation toggleMode={toggleMode}/>
      <BrowserRouter>
        <Navigation />
        <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signout" component={SignOut}/>
        <Route path='/sequence/:sequenceId' component={Sequence}/>
        <Route path='/sequences' component={Sequences}/>
        <Route path='/sequencecreate' component={PoseSelect}/>
        </Switch>
      </BrowserRouter>
     </MuiThemeProvider>
  );
}