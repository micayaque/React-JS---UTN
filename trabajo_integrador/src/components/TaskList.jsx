import {React, useState} from 'react';
import {TaskForm} from './TaskForm'
import { FaCheck } from "react-icons/fa";


// Este componente deberá mostrar la lista de tareas.
// Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
// relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
// Cada tarea debe representarse mediante un componente TaskItem.

// import { IconName } from "react-icons/hi";

function TaskList({tasks, completeTask}){
    const [edit, setEdit] = useState({id:null, value:''});
    
    return tasks.map((task, index) => (
        <div className={task.completed ? 'task-complete' : 'task-incomplete'} key={index}>
            <div className="icons">
                <div className='task-container' key={task.id} onClick={() => completeTask(task.id)}>
                    <FaCheck 
                    className='check-icon'
                    onClick={() => setEdit({id: task.id, value: task.value})}/>
                    <p className={!task.completed ? 'task-text' : 'line-through'}>{task.text}</p>
                </div>
            </div>
        </div>
    ))
}

export default TaskList;