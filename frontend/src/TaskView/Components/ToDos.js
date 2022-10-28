import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Tasks from './Tasks';
import {useState} from 'react'

const Todos = () => {
    const [done, setDone] = useState([1]);

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
      return (
      //  <section class="listContainer">
        <Box component="span" sx={{border: '1px solid black' }}>
          <List sx={{   
            width: '100%', 
            maxWidth: 360, 
            bgcolor: 'background.paper' }}>
            {[0, 1, 2, 3].map((value) => {
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
                    
                      <ListItemText id={labelId} primary={`Task ${value + 1}`} />
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