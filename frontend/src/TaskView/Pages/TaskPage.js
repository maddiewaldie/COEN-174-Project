import React, { useState } from 'react';
import Todos from '../Components/ToDos';
import Tasks from '../Components/Tasks'
import './Task.css';


const TaskPage = () => {
    return (
        <section class="main">
            <section class="todos" id="todosSection">
                <header>
                    <div id= "headerContainer">
                        ToDos for Today
                    </div>
                </header>
                <section id= "checklist">
                    <Todos />
                    <Tasks />
                    
                </section>
            </section>
            <section class="Calendar" id="Calendar">
                <header>
                    <div id= "calendarContainer">
                        Calendar
                    </div>
                </header>
            </section>  
        </section>
    );
};


export default TaskPage; 