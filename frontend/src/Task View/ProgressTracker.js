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

const theme = createTheme();
const percentTasksCompleted = 60;
const tasksToDo = ["Dishes", "Laundry", "Homework", "Pay Bills"];
const tasks = ["Dishes", "Laundry", "Homework", "Pay Bills"];
const dueDates = ["12/1", "12/2", "12/3", "12/4"];
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

function PercentCompleteGraph(props: CircularProgressProps & { value: number },) {
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
          <LinearProgress variant="determinate" value={3} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 😕 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={30} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 😐 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={10} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 🙂 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={50} thickness={10} sx={{ marginLeft: `100px`}}/> 
        </Box>
        <Box sx={{ marginRight: `100px` }}> 
          <Typography variant="h3" color="text.secondary"> 😁 </Typography> 
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}> 
          <LinearProgress variant="determinate" value={80} thickness={10} sx={{ marginLeft: `100px`}}/> 
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
