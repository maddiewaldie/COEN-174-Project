import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './UserInfoView/LogIn';
import SignUp from './UserInfoView/SignUp';
import ProgressTracker from './Task View/ProgressTracker';
import Home from './Home';
import TaskPage from './TaskView/Pages/TaskPage';
export default function App() {
  return (
   <Router>
      <Route exact path='/'>
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
      <Route path='/TaskPage' >
          <TaskPage />
      </Route>
   </Router>
  );
}
