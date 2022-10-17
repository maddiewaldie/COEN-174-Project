import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoginPage from './UserInfoView/LogIn';
import SignUp from './UserInfoView/SignUp';
import Home from './Home';
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
   </Router>
        
  
    /*<Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Goal Tracking App
        </Typography>
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue="Username"
        />
        <br>
        </br>
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Password"
        />
      </Box>
    </Container>*/
  );
}
