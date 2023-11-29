import React , {useState} from 'react';
import {TaskForm} from './TaskForm';
import TaskList from './TaskList';
import Header from './Header';

var numTasks = 0;

function TaskItem () {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        // si el texto esta vacio o no es valido
        if(!task.text || /^\s*$/.test(task.text)){
            return;
        }

        // sino
        const newTasks = [...tasks, task];
        setTasks(newTasks);
        numTasks++;

        // para visualizar los objetos task
         console.log(tasks, task);
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
            <div className='list-container'><TaskList tasks={tasks} completeTask={completeTask}/></div>
            <TaskForm onSubmit={addTask} />
        </div>
    </>  
    );
}

export {TaskItem, numTasks};