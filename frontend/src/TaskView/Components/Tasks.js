import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
/** 
 * TASK DIALOG COMPONENT  
 * **/
const Tasks = ({taskItems, setTaskItems}, {completed, setCompleted}) => {
  
  // for task dialog pop-up
  const [open, setOpen] = React.useState(false);

  // task items 
  const [taskID, setTaskID] = React.useState(0);
  const [name, setName] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [deadline, setDeadline] = React.useState(dayjs('2022-10-31'));
 
  
  let arr = [];
  // task object 
  const [task, setTask] = React.useState({
    taskID: 0,
    name: "",
    tags: "",
    priority: "",
    deadline: dayjs('2022-10-31'),
    completed: false
  });

  // task dialog box handling
  const handleClickOpen = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setOpen(false);
  }
  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
    
    setTaskID(taskID + 1);

    setTask({
      taskID: taskID,
      name: name,
      tags: tags,
      priority: priority,
      deadline: deadline,
      completed: completed
    })
   
    //setCompleted(false);
    let tempTask = { taskID: taskID,
      name: name,
      tags: tags,
      priority: priority,
      deadline: deadline,
      completed: completed}

    const tasksArr = [...taskItems];
    tasksArr.push(tempTask); 
    setTaskItems(tasksArr);
    sessionStorage.setItem("taskObject", JSON.stringify(tasksArr));

  };
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
  },[task]);
  
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
            value={name}
            onChange={(event) => setName(event.target.value)
            }
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
                value={tags}
                onChange={(event) => setTags(event.target.value)}
                >
              
                <MenuItem value="Work">Work</MenuItem>
                <MenuItem value= "Personal">Personal</MenuItem>
                <MenuItem value= "Health">Health</MenuItem>
                <MenuItem value= "Errands">Errands</MenuItem>
                <MenuItem value= "Leisure">Leisure</MenuItem>
                <MenuItem value= "Miscellaneous">Miscellaneous</MenuItem>
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
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              
              </Select>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={deadline}
                onChange={(date) => setDeadline(date)}
                renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
              
           
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Tasks;


