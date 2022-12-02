import React, { useState, useEffect } from 'react';
import Todos from '../Components/ToDos';
import Tasks from '../Components/Tasks'
import Calendar from '../Components/Calendar'
import './Task.css';
import Sidebar from '../../UserInfoView/Sidebar';
import {getTask} from '../../RequestOptions/task-requests';


const TaskPage = () => {
    const [taskItems, setTaskItems] = useState([]);
    let temp_task={};
    const fetchAPI = async () => {
        let account_ID = JSON.parse(localStorage.getItem("account_id")) || false;
        temp_task = await getTask(account_ID);
        setTaskItems(temp_task[0].get); 
        const tasksArr = [...taskItems];

      
        sessionStorage.setItem("taskObject", JSON.stringify(tasksArr));
   };
    
    useEffect(()=>{
        fetchAPI();
        const taskStorage = JSON.parse(sessionStorage.getItem("taskObject")) || [];
 
        setTaskItems(taskStorage);
        
  
    }, [])
    return (
        <section class="main">
            <section class="sidebar" id="sidebar">
                <Sidebar />
            </section>
            <section class="todos" id="todosSection">
                <header>
                    <div id= "headerContainer">
                        TO DO
                    <section id="addTask">
                        <Tasks taskItems={taskItems}
                           setTaskItems = {setTaskItems}
                           />
                    </section>
                    </div>
                </header>
                <section id= "checklist">
                    
                    <Todos taskItems={taskItems}
                           setTaskItems = {setTaskItems}
                           />
                    
                    
                </section>
            </section>
           
            <section class="Calendar" id="Calendar">
                
                <section id= "calendarComponent">
                    <Calendar taskItems={taskItems} 
                              setTaskItems={setTaskItems}/>
                </section>
            </section>  
        </section>
    );
};


export default TaskPage; 