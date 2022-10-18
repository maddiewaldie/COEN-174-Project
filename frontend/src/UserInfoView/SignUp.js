import * as React from 'react';
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
import { Link as Linker} from 'react-router-dom'

const theme = createTheme();
const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
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
                            autoComplete="given-name"
                            name ="firstName"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            name ="lastName"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                        />
                      </Grid>
                      <Grid item xs={12} >
                        <TextField
                            name ="password"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                        />
                      </Grid>    
                  </Grid>
   
                  <Linker to={'/home'}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </Button>
                  </Linker>
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