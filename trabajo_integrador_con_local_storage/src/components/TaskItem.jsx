import React , {useEffect, useState} from 'react';
import {TaskForm} from './TaskForm';
import TaskList from './TaskList';
import Header from './Header';

const getLocalStorage = () => {
    let tasks = localStorage.getItem("list");
    if(tasks){
        return (tasks = JSON.parse(localStorage.getItem("list")));
    } else {
        return [];
    }
};

var taskId=localStorage.getItem("id");
var numTasks=localStorage.getItem("num");

function TaskItem () {

    const [tasks, setTasks] = useState(getLocalStorage());

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(tasks));
    }, [tasks]);

    localStorage.setItem("num", numTasks);
    localStorage.setItem("id", taskId);

    const addTask = task => {
        // si el texto esta vacio o no es valido
        if(!task.text || /^\s*$/.test(task.text)){
            return;
        }
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        taskId++;
        numTasks++;
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task => {            
            if(task.id === id){
                if(task.completed){
                    numTasks++;    
                } else {
                    numTasks--;
                }

                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(updatedTasks)
    }

    return(
    <>
        <div>
            <Header tasks={tasks}/>
            <div className='list-container'>
                <TaskForm onSubmit={addTask} />
                <TaskList tasks={tasks} completeTask={completeTask}/>
                
            </div>
            
        </div>
    </>  
    );
}

export {TaskItem, numTasks, taskId};