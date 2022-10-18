import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoginPage from './UserInfoView/LogIn';
import SignUp from './UserInfoView/SignUp';
import ProgressTracker from './Task View/ProgressTracker';
import Home from './Home';
import ToDos from './Task View/ToDos';
export default function App() {
  return (
   <Router>
      <Route exact path='/' exact>
          <LoginPage />
      </Route>
      <Route path='/signup' >
          <SignUp />
      </Route>
      <Route path='/home' >
          <Home />
      </Route>
      <Route path='/progresstracker' >
          <ProgressTracker />
      </Route>
      <Route path='/todos' >
          <ToDos />
      </Route>
   </Router>
  );
}
