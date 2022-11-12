import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link as Linker} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();
const ToDos = () => {
    return (
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            To Do's
          </Typography>
        </Box>
    );
  };

export default ToDos;