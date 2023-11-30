import {React, useState} from 'react';
import {TaskForm} from './TaskForm'
import { IoCheckmarkOutline } from "react-icons/io5";
import { FiSquare } from "react-icons/fi";



// Este componente deberá mostrar la lista de tareas.
// Recibirá como propiedades la lista de tareas y funciones para gestionar eventos
// relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.).
// Cada tarea debe representarse mediante un componente TaskItem.

// import { IconName } from "react-icons/hi";

function TaskList({tasks, completeTask}){
    // const [edit, setEdit] = useState({id:null, value:''});
    //onClick={() => setEdit({id: task.id, value: task.value})}
    
    return tasks.map((task, index) => (
                <div className='task-container' key={index}>
                    <button className='check-list'>
                        {task.completed ? <IoCheckmarkOutline className='check-icon' key={task.id} onClick={() => completeTask(task.id)}/> : <FiSquare className='check-square' key={task.id} onClick={() => completeTask(task.id)}/>}
                    </button>
                    
                    <p className={!task.completed ? 'task-text' : 'line-through'}>{task.text}</p>
                </div>
    ))
}

export default TaskList;