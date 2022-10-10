import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function App() {
  return (
    <Container maxWidth="sm">
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
    </Container>
  );
}
