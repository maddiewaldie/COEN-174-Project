import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tasks from './Tasks';
import {useState, useEffect} from 'react'

/** 
 * CHECKLIST COMPONENT  
 * **/
const Todos = ({taskItems,setTaskItems}, {completed, setCompleted}) => {
    const [done, setDone] = useState([1]);
    const [tagColor, setTagColor] = useState("primary");
    let color = "";
    const toggle = (checked) => () => {
        // current index = 0 
        const currentIndex = done.indexOf(checked);
        const newList = [];
        newList.push(done[checked]); //new list copies current done array
    
        if (currentIndex === -1) {
          newList.push(checked);
          setCompleted(true);
        } else {
          newList.splice(currentIndex, 1);
          setCompleted(false);
        }
    
        setDone(newList);
        
    };

   
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
                      />
                      <Stack direction="row" spacing={12}>
                        <ListItemText primary ={task.name} />
                        <Chip size="small" label={task.tags}  
                          color={tagColor}/>
                      </Stack>
                      

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