import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import  Badge  from '@mui/material/Badge';


/*** CALENDAR COMPONENT */
const Calendar = ({taskItems, setTaskItems}) => {
  const [value, setValue] = React.useState(() => dayjs(new Date()));
  //const [selectedDays, setSelectedDays] = React.useState([]);
  const dateList = [];
    for (let i=0; i < taskItems.length; i++){
      dateList.push(taskItems[i].deadline);
    }
  
    
  
  const handleDeadlines = (value) => {
    const dateList = [...selectedDays];
    for (let i=0; i < taskItems.length; i++){
      dateList.push(taskItems[i].deadline);
    }
    setSelectedDays ([...dateList]);
    const date = makeJSDateObject(value);
    const isSelected = selectedDays.includes(date.getDate());
    return <Badge badgeContent={isSelected ? "🌚" : undefined}>{dayComponent}</Badge>;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        onChange={(newValue) => setValue(newValue)}
        value={value}
        dateFormat="MM/yyyy"
        onChange={()=> console.log(value.toDate())}
        renderInput={(params) => <TextField {...params} />}
       
        componentsProps={{
          actionBar: {
            actions: ['today'],
          },
        }}
       
      >
        
        <Badge color="secondary" variant="dot" value={value} />
      </StaticDatePicker>
      
      
    </LocalizationProvider>
  );
}

export default Calendar;
