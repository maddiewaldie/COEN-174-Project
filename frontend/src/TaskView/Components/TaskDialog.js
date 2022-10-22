import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const TaskDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="task"
            fullWidth
            variant="standard"
          />
           <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel>Tags</InputLabel>
              <Select
                autoFocus
                label="tags"
                inputProps={{
                  name: 'tags',
                }}
              >
                <MenuItem>Work</MenuItem>
                <MenuItem>Personal</MenuItem>
                <MenuItem>Health</MenuItem>
                <MenuItem>Errands</MenuItem>
                <MenuItem>Leisure</MenuItem>
                <MenuItem>Miscellaneous</MenuItem>
              </Select>
            </FormControl>
           
          </Box>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel>Priority</InputLabel>
              <Select
                autoFocus
                label="priority"
                inputProps={{
                  name: 'priority',
                }}
              >
                <MenuItem>High</MenuItem>
                <MenuItem>Medium</MenuItem>
                <MenuItem>Low</MenuItem>
              
              </Select>
            </FormControl>
           
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TaskDialog;


