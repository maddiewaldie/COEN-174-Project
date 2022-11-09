import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as Linker} from 'react-router-dom';
import api_endpoint from '../config.js';


const theme = createTheme();
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [account, setAccount] = useState({
      username,
      password
    });
    
      
    const handleSubmit = () => {
      if (username == '') setUserErr(true);
      if (password == '') setPassErr(true);
      if (username && password){
        setAccount({
          username: username,
          password: password
        })
      }

      let params = {
        type: "create_account",
        name: username,
        password: password
      }
      let xhttp = new XMLHttpRequest();

      // debug
      console.log(api_endpoint);
      console.log(params);

      xhttp.open("POST", api_endpoint, true);
      xhttp
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.onload = function(){
        // TODO Check if error or success
        console.log(this.response);
      }
      xhttp.send(JSON.stringify(params));

    };

      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
              }}
            />
            <Typography component="h1" variant="h5">
                  Sign Up
            </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <Grid container spacing ={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField 
                            name ="username"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            autoFocus
                            inputProps={{
                              "data-testid": "username",
                            }}
                            value={username}
                            onChange={(event)=> setUsername(event.target.value)}
                            error={userErr}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        
                      </Grid>
                      <Grid item xs={12} >
                        <TextField
                            name ="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            inputProps={{
                              "data-testid": "password"
                            }}
                            value={password}
                            onChange={(event)=> setPassword(event.target.value)}
                            error= {passErr}
                        />
                      </Grid>    
                  </Grid>
   
                
                    <Button
                      onClick={handleSubmit}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      
                    >
                      Sign Up
                    </Button>
                  
                  <Grid container>
                    <Grid item>
                      <Link href="/" variant="body2">
                        {"Already have an account?"}
                        <Link to ="/LogIn"> Login </Link>
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
          </Container>
        </ThemeProvider>
      );
};

export default SignUp;
