import React, { useState, useEffect } from 'react';
import Home from '../../containers/Home/Home';
import SignIn from '../../containers/SignIn/SignIn';
import SignUp from '../../containers/SignUp/SignUp';
import SignOut from '../../containers/SignOut/SignOut';
import Sequence from '../../components/Sequence/Sequence';
import Sequences from '../../components/Sequences/Sequences';
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
// import { loadUser } from '../../services/userIdService';
import { getSequenceById } from '../../services/sequenceService';
import { getSequencesByUser } from '../../services/sequenceService';


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
        <Route path="/home" component={Home}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/signout" component={SignOut}/>
        <Route exact path='/sequence' component={Sequence}/>
        <Route exact path='/sequences' component={Sequences}/>
        {/* <Route path='/create' component={Create}/> */}
        {/* <Route path='/sequence' element={<Sequence authed={true}/>}/> */}
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}