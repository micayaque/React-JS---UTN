import {React, useState} from 'react';
import TaskForm from './TaskForm'

import { IoCheckmarkOutline } from "react-icons/io5";
import { FiSquare } from "react-icons/fi";

function TaskList({tasks, completeTask}){
    
    return tasks.map((task, index) => (
        <div className='task-container' key={index}>
            <button className='check-list'>
                {task.completed ? <IoCheckmarkOutline className='check-icon' key={task.id} onClick={() => completeTask(task.id)}/> : <FiSquare className='check-square' key={task.id} onClick={() => completeTask(task.id)}/>}
            </button>
            <p className={!task.completed ? 'task-text' : 'line-through'}>{task.text}</p>
        </div>
    ));
}

export default TaskList;