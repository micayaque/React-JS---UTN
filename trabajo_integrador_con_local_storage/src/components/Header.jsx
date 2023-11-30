import React from 'react';

import { numTasks } from './TaskItem';

const currentDate = new Date();

let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth();

let weekDay;

switch (currentDay) {
    case 0:
    weekDay = "Sunday";
    break;

    case 1:
    weekDay = "Monday";
    break;

    case 2:
    weekDay = "Tuesday";
    break;

    case 3:
    weekDay = "Wednesday";
    break;
    
    case 4:
    weekDay = "Thursday";
    break;
    
    case 5:
    weekDay = "Friday";
    break;

    case 6:
    weekDay = "Saturday";
    break;

}

let month;

switch (currentMonth) {
    case 0:
    month = "January";
    break;

    case 1:
    month = "February";
    break;

    case 2:
    month = "March";
    break;

    case 3:
    month = "April";
    break;
    
    case 4:
    month = "May";
    break;
    
    case 5:
    month = "June";
    break;

    case 6:
    month = "July";
    break;

    case 7:
    month = "August";
    break;

    case 8:
    month = "September";
    break;

    case 9:
    month = "October";
    break;

    case 10:
    month = "November";
    break;

    case 11:
    month = "December";
    break;

}

function Header(tasks){

    return(
        <>
            <div className='principal-box'>
                     {/* acá no debería usar task id sino la cantidad de tareas que quedan
                     por completar pero no llegue a terminarlo */}
                    <div className='num-tasks'><b>{numTasks}</b> Task</div>
                    <div className='day'><b>{weekDay}</b>{', ' + currentDate.getDate() + 'th'} </div>
                    <li className='month'>{month}</li> 
            </div>
        </>
        
    );
}

export default Header;