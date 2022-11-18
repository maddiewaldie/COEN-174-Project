import React, { useState, useEffect } from 'react';
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
import { createUser } from '../RequestOptions/user-requests';
import { Link as Linker} from 'react-router-dom';
import api_endpoint from '../config.js';


const theme = createTheme();
const SignUp = () => {
    let account_id = 1;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [account, setAccount] = useState({
      account_id,
      username,
      password
    });

    useEffect(() => {
      console.log("account: ", account)
    }, [account]);
    
      
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log("submit");
      if (username == '') setUserErr(true);
      if (password == '') setPassErr(true);
      if (username && password){
        try {
          console.log("in here");
          let result = await createUser({"username": username, "password": password}); 
          console.log(result);
          console.log(account);
          account_id = result[0].id || 1;
          console.log("account_id: ", account_id);
          // account_id = JSON.parse(result)[0].get[0] || 1;
          console.log(account);
          localStorage.setItem("account_id", account_id);
          //accountID = JSON.parse(localStorage.getItem("user") || "{}").id
          setAccount({
            account_id: account_id,
            username: username,
            password: password
          });
          console.log(account);
        } catch(e){
          console.log("error", e);
        }

       
      }

      

    /*  let params = {
        username: username,
        password: password
      }
      let xhttp = new XMLHttpRequest();

      // debug
      console.log(api_endpoint);
      console.log(params);

      xhttp.open("POST", api_endpoint, true);
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.onload = function(){
        // TODO Check if error or success
        console.log(this.response);
        localStorage.setItem("user", JSON.stringify(this.response.data));
      }
      xhttp.send(JSON.stringify({type: 'create_account', params: {params} }));*/

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
                      // onClick={handleSubmit}
                      type="submit"
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
