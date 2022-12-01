import * as React from 'react';
import ProgressTracker from './ProgressTracker';
import Sidebar from '../UserInfoView/Sidebar';
import { getTask } from '../RequestOptions/task-requests';
import './Progress.css';
const ProgressTrackerPage = () => {
//    let tempTask = {};
   
//    React.useEffect(()=>{
//     const fetchAPITasks = async () => {
//         let accountID = JSON.parse(localStorage.getItem("account_id")) || false;
//         tempTask = await getTask(accountID);
//     };
    
//     fetchAPITasks();
//     console.log("In progress tracker page: ", tempTask);

//    }, [tempTask]) 
//    console.log("In progress tracker page, outside of useEffect: ", tempTask);
    

    return (
      <section class="main">
        <section class="sidebar" id="sidebar">
                <Sidebar />
        </section>
        <section>
            <ProgressTracker />
        </section>
    </section>
    );
  };

export default ProgressTrackerPage;
