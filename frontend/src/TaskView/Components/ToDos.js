import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import Stack from '@mui/material/Stack';
import Tasks from './Tasks';
import {useState, useEffect} from 'react'

/** 
 * CHECKLIST COMPONENT  
 * **/
const Todos = ({taskItems,setTaskItems}) => {
  const [done, setDone] = useState([1]);
  const [tagColor, setTagColor] = useState("primary");
  console.log(taskItems);
  const toggle = (checked) => () => {
      // current index = 0 
      const currentIndex = done.indexOf(checked);
      const newList = [];
      newList.push(done[checked]); //new list copies current done array
  
      if (currentIndex === -1) {
        newList.push(checked);
      } else {
        newList.splice(currentIndex, 1);     
      }
  
      setDone(newList);
      
  };

  const handleCheckboxChange = (event, value) => {
    console.log(value);
    console.log(event.target.checked);
    //const tasksArr = sessionStorage.getItem("taskObject");
    //const tasksArrParsed = JSON.parse(tasksArr);
    const tasksArrParsed = taskItems;
    tasksArrParsed[value].completed = event.target.checked;
    
    sessionStorage.setItem("taskObject", JSON.stringify(tasksArrParsed));
    setTaskItems(tasksArrParsed);
    //updateTask(tasksArrParsed[value]);
   
    
  }

  const handleDelete = (value) => {
    //deleteTask(taskItems[value]);
    const slicedArr = taskItems.slice(0, value).concat(taskItems.slice(value+1)); 
    sessionStorage.setItem("taskObject", JSON.stringify(slicedArr));
    setTaskItems(slicedArr);
    
  }
 
  return (
  //  <section class="listContainer">
    <Box component="span" sx={{border: '1px solid black' }}>
      <List sx={{   
        width: '100%', 
        maxWidth: 360, 
        bgcolor: 'background.paper' }}>
        
        {taskItems.map((task, value) => {
          const labelId = `checkbox-list-label-${value}`;
          <Divider light/>
          return (
              <ListItem button divider
                key={value}
                disablePadding
              >      
                <ListItemButton role={undefined} onClick={toggle(value)} dense>
                    <Checkbox
                      edge="start"
                      done={done.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      checked={task.completed}
                      onChange={(e)=> handleCheckboxChange(e, value)}
                    />
                     <ListItemText primary ={task.task_name} />
                      <Chip size="small" label={task.tags}  
                        color={tagColor}/>
                      <RemoveCircleOutlineRoundedIcon
                        onClick={()=> handleDelete(value)} />
                    

                </ListItemButton>
             
                     
                    
              </ListItem >
          );
        
        })}
        <Divider light/>
      </List>
    </Box>
    // </section>
  );

    
}

export default Todos;