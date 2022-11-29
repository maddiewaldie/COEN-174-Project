import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BrightnessHighRoundedIcon from '@mui/icons-material/BrightnessHighRounded';
import Slider from '@mui/material/Slider';
import LinearProgress from '@mui/material/LinearProgress';
import { getTask } from '../RequestOptions/task-requests';

const theme = createTheme();
let percentTasksCompleted = 0;
let tasksToDo = [];
let tasks = [];
let dueDates = [];
let feelings = [0, 0, 0, 0, 0];

const marks = [
  {
    value: 0,
    label: '😕',
  },
  {
    value: 25,
    label: '😐',
  },
  {
    value: 50,
    label: '🙂',
  },
  {
    value: 75,
    label: '😁',
  },
  {
    value: 100,
    label: '🤩',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function PercentCompleteGraph(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress size= {150} variant="determinate" thickness={3} sx={{ marginLeft: `0px`}} {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

function UpcomingToDos() {
  return (
    <Timeline position="alternate">
    {tasksToDo.map((tasksToDo, index) => (
          <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          />
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <BrightnessHighRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {tasks[index]}
            </Typography>
            <Typography>Due: {dueDates[index]}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

function LinearProgressWithLabel() {
  return (
    <Box sx={{alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={feelings[0]} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 😕 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={feelings[1]} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 😐 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={feelings[2]} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 🙂 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={feelings[3]} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 😁 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={feelings[4]} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 🤩 </Typography> 
        </Box>
      </Box>
    </Box>
  );
}

function LinearDeterminate() {
  return (
    <Box sx={{ width: '100%' }}> <LinearProgressWithLabel /> </Box>
  );
}

function LeftSideProgressTracker() {
  return (
      <Box sx={{ my: 4 }}>
        <Typography align="center" variant="h6" component="h1" gutterBottom >
          % ToDos Completed
        </Typography>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
          <PercentCompleteGraph value={percentTasksCompleted} />
        </div>
        &nbsp;
        <Typography align="center" variant="h6" component="h1" gutterBottom >
          Upcoming ToDos
        </Typography>
        <UpcomingToDos />
      </Box>
    );
}

function RightSideProgressTracker() {
  const handleChange = (value) => {
    console.log(value);
    if(value == 1) {
      feelings[0] = feelings[0] + 1;
    }
    else if(value == 2) {
      feelings[1] = feelings[1] + 1;
    }
    else if(value == 3) {
      feelings[2] = feelings[2] + 1;
    }
    else if(value == 4) {
      feelings[3] = feelings[3] + 1;
    }
    else if(value == 5) {
      feelings[4] = feelings[4] + 1;
    }
  };
  return (
    <Box sx={{ my: 4 }}>
      <Typography align="center" variant="h6" component="h1" gutterBottom >
        How do you feel about your progress today?
      </Typography>
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <Slider
          aria-label="Restricted values"
          defaultValue={0}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleChange({valuetext})}
          gutterBottom 
          sx={{ marginLeft: `100px`, marginRight: `100px`}}
        />
      </div>
      &nbsp;
      <Typography align="center" variant="h6" component="h1" gutterBottom > How You've Been Feeling </Typography>
      <LinearDeterminate />
    </Box>
  );
}

const ProgressTracker = () => {
   let tempTask = {};
   
   const fetchAPITasks = async () => {
        let accountID = JSON.parse(localStorage.getItem("account_id")) || false;
        tempTask = await getTask(accountID);
        console.log(tempTask);
        let fetchTasks = tempTask[0].get;
        console.log(tasks);
        sessionStorage.setItem("taskProgress", JSON.stringify(fetchTasks));
        
    };

    fetchAPITasks();
   
   React.useEffect(()=>{
    fetchAPITasks();
   }, [tempTask]) 

  let taskProgress = JSON.parse(sessionStorage.getItem("taskProgress"));
  console.log(taskProgress[0].completed);

  let numberOfCompletedTasks = 0;
  for(let i = 0; i < taskProgress.length; i++) {

    if(taskProgress[i].completed == 1) {
      numberOfCompletedTasks = numberOfCompletedTasks + 1;
    }
    else {
      tasksToDo.push(taskProgress[i].task_name);
      tasks.push(taskProgress[i].task_name);
      dueDates.push(taskProgress[i].deadline);
    }
    console.log(numberOfCompletedTasks);
  }
  percentTasksCompleted =  (numberOfCompletedTasks / taskProgress.length) * 100;
  console.log(percentTasksCompleted);

  

    return (
      <Box sx={{ my: 4 }}>
        <Typography align="center" variant="h4" component="h1" gutterBottom sx={{ marginLeft: `0px`}}>
          Progress Tracker
        </Typography>
        <div style={{  
          display: "grid",  
          gridTemplateColumns: "1fr 1fr"  
          }}>
            <LeftSideProgressTracker />
            <RightSideProgressTracker />
          </div>
      </Box>
    );
  };

export default ProgressTracker;
